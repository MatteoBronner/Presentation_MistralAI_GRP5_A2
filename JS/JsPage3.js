document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 90;

    const data = [
        { label: 'Mistral AI', value: 28, color: '#f45d05' },
        { label: 'Aleph Alpha', value: 36, color: '#ff8c3a' },
        { label: 'Hugging Face', value: 22, color: '#ffb066' },
        { label: 'DeepL', value: 14, color: '#ffc680' }
    ];

    let startAngle = 0;
    data.forEach(item => {
        const sliceAngle = (item.value / 100) * 2 * Math.PI;
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        // Ajouter le texte au centre de chaque segment
        const midAngle = startAngle + sliceAngle / 2;
        const textX = centerX + Math.cos(midAngle) * radius * 0.6;
        const textY = centerY + Math.sin(midAngle) * radius * 0.6;
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${item.value}%`, textX, textY);

        startAngle += sliceAngle;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 90;

    const data = [
        { label: 'Mistral AI', value: 28, color: '#f45d05' },
        { label: 'Aleph Alpha', value: 36, color: '#ff8c3a' },
        { label: 'Hugging Face', value: 22, color: '#ffb066' },
        { label: 'DeepL', value: 14, color: '#ffc680' }
    ];

    let startAngle = 0;
    data.forEach(item => {
        const sliceAngle = (item.value / 100) * 2 * Math.PI;
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        // Ajouter le texte au centre de chaque segment
        const midAngle = startAngle + sliceAngle / 2;
        const textX = centerX + Math.cos(midAngle) * radius * 0.6;
        const textY = centerY + Math.sin(midAngle) * radius * 0.6;
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${item.value}%`, textX, textY);

        startAngle += sliceAngle;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('pieChart2');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 90;

    const data = [
        { label: 'Mistral AI', value: 26, color: '#f40505' },
        { label: 'Aleph Alpha', value: 42, color: '#3a82ff' },
        { label: 'Hugging Face', value: 21, color: '#62ee79' },
        { label: 'DeepL', value: 11, color: '#ffee80' }
    ];

    let startAngle = 0;
    data.forEach(item => {
        const sliceAngle = (item.value / 100) * 2 * Math.PI;
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        // Ajouter le texte au centre de chaque segment
        const midAngle = startAngle + sliceAngle / 2;
        const textX = centerX + Math.cos(midAngle) * radius * 0.6;
        const textY = centerY + Math.sin(midAngle) * radius * 0.6;
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${item.value}%`, textX, textY);

        startAngle += sliceAngle;
    });
});



const labels2 = ['OpenAI', 'Anthropic', 'Mistral AI'];
const leveeDeFonds = [10.2, 0.65, 2.79];
const valorisations2 = [74.4, 4.65, 11.7];

const maxValo2 = Math.max(...valorisations2);
const suggestedMax2 = maxValo2 * 1.1;


const leveeDataset2 = {
    label: "Total Levée de Fonds (€ Mds)",
    data: leveeDeFonds,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 123, 255, 0.7)',
    borderColor: 'rgb(0, 123, 255)',
    hoverBackgroundColor: 'rgba(0, 123, 255, 1)',
};


const valoDataset2 = {
    label: "Valorisation (€ Mds)",
    data: valorisations2,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 159, 64, 0.7)',
    borderColor: 'rgb(255, 159, 64)',
    hoverBackgroundColor: 'rgba(255, 159, 64, 1)',
};



const cty2 = document.getElementById('myChartComparaison').getContext('2d');
const myChart2 = new Chart(cty2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [leveeDataset2, valoDataset2]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: suggestedMax2,
                    callback: function (value) {
                        return value + ' Mds €';
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Montant (Mds €)'
                }
            }],
            xAxes: [{
                barPercentage: 0.8,
                categoryPercentage: 0.8
            }]
        },
        title: {
            display: true,
            text: 'Comparaison des Levées de Fonds et Valorisations des Leaders de l\'IA',
            fontSize: 18,
            fontStyle: 'bold',
            fontColor: '#333'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += tooltipItem.yLabel.toFixed(2) + ' Mds €';
                    return label;
                }
            }
        },
        legend: {
            display: true,
        }
    }
});