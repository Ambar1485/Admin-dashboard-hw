const dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
const orderCountArr = [3,7,6,2,4,9,5,8,1,5,4];
const viewerCountArr = [22,42,14,38,72,41,55,61,24,34,28];
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
            label: 'Order Count',
            data: orderCountArr,
            fill: {
                target: 'origin',
                above: '#0d6efd50',
            },
            backgroundColor: [
                '#0d6efd50'
            ],
            borderColor: [
                '#0d6efd',
            ],
            
            borderWidth: 1,
            tension: 0
        },
        {
            label: 'Viewer Count',
            data: viewerCountArr,
            fill: {
                target: 'origin',
                above: '#ffc10750',
            },
            backgroundColor: [
                '#ffc10750'
            ],
            borderColor: [
                '#ffc107',
            ],
            borderWidth: 1,
            tension: 0
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                beginAtZero: true,
                display: false
            }
        },
        plugins: {
            legend: {
                labels: {
                  usePointStyle: true
                }
              }
        }
    }
});

// pie chart

const config = {
    type: 'doughnut',
    data: {
        datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            '#0d6efd30',
            '#ffc107',
            'rgb(143, 227, 255)'
        ],
        hoverOffset: 4
        }],
    },
    options: { 
        responsive: true,
        maintainAspectRatio: true,
        showScale: false,
    }
};
const pieChart = new Chart(
    document.getElementById('pieChart'),
    config
  );
