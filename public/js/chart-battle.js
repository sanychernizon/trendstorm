const panelNameDOM = document.querySelector('#panelName').textContent
const keywordDOM = document.querySelector('#keyword').textContent
const startTimeDOM = document.querySelector('#startTime').textContent
const endTimeDOM = document.querySelector('#endTime').textContent

const panelNameDOM2 = document.querySelector('#panelName2').textContent
const keywordDOM2 = document.querySelector('#keyword2').textContent
const startTimeDOM2 = document.querySelector('#startTime2').textContent
const endTimeDOM2 = document.querySelector('#endTime2').textContent

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const promise1 = axios.post('/panel/gapi', `keyword=${keywordDOM}&startTime=${startTimeDOM}&endTime=${endTimeDOM}`, config)
const promise2 = axios.post('/panel/gapi', `keyword=${keywordDOM2}&startTime=${startTimeDOM2}&endTime=${endTimeDOM2}`, config)

Promise.all([promise1, promise2])
    .then((data) => {
        
        const resultsGoogleTrends1  = data[0].data.resultsGoogleTrends;
        const googleResults1 = JSON.parse(resultsGoogleTrends1).default.timelineData;

        const resultsGoogleTrends2  = data[1].data.resultsGoogleTrends;
        const googleResults2 = JSON.parse(resultsGoogleTrends2).default.timelineData;

        const resultsLabel1 = googleResults1.map((item) => {
            return item.formattedTime
        });

        const resultsLabel2 = googleResults2.map((item) => {
            return item.formattedTime
        });

        function compareLabel(resultsLabel1, resultsLabel2) {
            if (resultsLabel1.length == resultsLabel2.length) {
                return resultsLabel1;
            } else if (resultsLabel1.length > resultsLabel2.length) {
                return resultsLabel2;
            } else {
                return resultsLabel1;
            }
        }

        const chosenLabel = compareLabel(resultsLabel1, resultsLabel2);
        
        const resultsData1 = googleResults1.map((item) => {
            return item.value[0]
        });
        
        const resultsData2 = googleResults2.map((item) => {
            return item.value[0]
        });
        
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: chosenLabel,
                datasets: [{
                    label: `${keywordDOM}`,
                    borderColor: 'rgb(255, 99, 132)',
                    data: resultsData1
                },
                {
                    label: `${keywordDOM2}`,
                    borderColor: 'rgb(134, 199, 102)',
                    data: resultsData2
                }
                ]
            },
            // Configuration options go here
            options: {}
        });
    })
