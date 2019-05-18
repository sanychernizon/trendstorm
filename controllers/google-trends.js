const googleTrends = require('google-trends-api');

const googleTrendsController = (req, res) => {

    const { keyword } = req.body;
    const { startTime } = req.body;
    const { endTime } = req.body;

    const optionsObject = {
        keyword: keyword,
        startTime: new Date(startTime),
        endTime: new Date(endTime)
    }

    googleTrends.interestOverTime(optionsObject)
        .then(function (results) {
            res.send({
                resultsGoogleTrends: results
            });
        })
        .catch(function (err) {
            console.error('Oh no there was an error', err);
        });
}

module.exports = googleTrendsController;