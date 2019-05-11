const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user-model');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //Match user
            User.findOne({ email: email})
            .then(user => {
                if(!user) {
                    return done(null, false, {message: 'O email não está cadastrado.'})
                }

                //Match password
                bcrypt.compare(password, user.password, (err,isMatch) => {
                    if(err) throw err;
                    if(isMatch) {
                        return done (null, user);
                    } else {
                        return done (null, false, {message: 'Senha incorreta'})
                    }
                });
            })
            .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    })
    
    passport.deserializeUser(function (id, done) {
        User.findById(id).then((user) => {
            done(null, user);
        })
    })
}