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
        { label: 'Mistral AI', value: 26, color: '#f45d05' },
        { label: 'Aleph Alpha', value: 42, color: '#ff8c3a' },
        { label: 'Hugging Face', value: 21, color: '#ffb066' },
        { label: 'DeepL', value: 11, color: '#ffc680' }
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
