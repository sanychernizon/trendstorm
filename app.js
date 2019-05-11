require('dotenv').config();
const express = require('express'),
    app = express(),
    hbs = require('hbs'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20'),
    mongoose = require('mongoose'),
    User = require('./models/user-model'),
    cookieSession = require('cookie-session'),
    session = require('express-session'),
    flash = require('connect-flash'),
    bcrypt = require('bcryptjs'),
    bodyParser = require('body-parser');

// SETUP

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}))
hbs.registerPartials(__dirname + '/views/partials');

// GLOBAL VARS

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// EXPRESS SESSION



//API GOOGLE TRENDS
const googleTrends = require('google-trends-api');

const optionsObject = {
    keyword: 'Phone',
    startTime: new Date(2017, 1, 15),
    endTime: new Date(2018, 12, 15)
}

googleTrends.interestOverTime(optionsObject)
    .then(function (results) {
        app.get('/', (req, res) => {
            res.send(results);
        })
    })
    .catch(function (err) {
        console.error('Oh no there was an error', err);
    });

// CONNECT MONGODB
const db = require('./config/keys').MongoURI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => { console.log(err) })

// SET UP PASSPORT
app.use(passport.initialize());
app.use(passport.session())

passport.use(new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
},
    function (token, tokenSecret, profile, done) {
        console.log(profile);
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log(`User is: ${currentUser}`);
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    thumbnail: profile.photos[0].value
                }).save().then((newUser) => {
                    console.log('new user created:' + newUser);
                    done(null, newUser);
                })
            }
        })
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (id, done) {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

// ROTAS
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/auth/local', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // All fields filled
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Por favor, preencha TODOS os campos!' })
    }

    // Check password
    if (password !== password2) {
        errors.push({ msg: 'As senhas não estão iguais!' })
    }

    if (errors.length > 0) {
        res.render('signin', { errors, email, name, password, password2 });
    } else {
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    errors.push({ msg: 'Usuário já cadastrado!' })
                    res.render('signin', { errors, email, name, password, password2 });
                } else {
                    let newUser = new User({
                        username: name,
                        password: password,
                        email: email
                    })
                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            // Set password to hash
                            newUser.password = hash;
                            // Save new user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'Usuário criado com sucesso! Você já pode logar :)')
                                    res.redirect('/login')
                                })
                                .catch(err => console.log(err))
                        })
                    })
                }
            })
    }

})

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/dashboard');
})

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/');
    } else {
        next();
    }
}

app.get('/dashboard', authCheck, (req, res) => {
    let user = req.user;
    res.render('dashboard', { user })
})

// auth logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})

// SERVIDOR
app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.log('Erro: ', error)
    }
    console.log('App rodando na porta 3000!')
});