const panelNameDOM = document.querySelector('#panelName').textContent
const keywordDOM = document.querySelector('#keyword').textContent
const startTimeDOM = document.querySelector('#startTime').textContent
const endTimeDOM = document.querySelector('#endTime').textContent

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

axios.post('/panel/gapi', 
    `panelName=${panelNameDOM}&keyword=${keywordDOM}&startTime=${startTimeDOM}&endTime=${endTimeDOM}`
, config)
    .then((data) => {        
        const { resultsGoogleTrends } = data.data;
        const googleResults = JSON.parse(resultsGoogleTrends).default.timelineData;

        const resultsLabel = googleResults.map((item) => {
            return item.formattedTime
        });

        const resultsData = googleResults.map((item) => {
            return item.value[0]
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: resultsLabel,
                datasets: [{
                    label: `${keywordDOM}`,
                    borderColor: 'rgb(255, 99, 132)',
                    data: resultsData
                }]
            },

            // Configuration options go here
            options: {}
        });
    })
