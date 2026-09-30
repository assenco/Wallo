//Grafico de pizza | grafico 1
const data1 = {
    labels: [
        'Moradia',
        'Lazer',
        'Mercado',
        'Outros'
    ],

    datasets: [{
        data: [300, 50, 100, 200],

        backgroundColor: [
            'rgb(43, 255, 0)',
            'rgb(0, 153, 255)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
        ],

        borderWidth: 0,
        hoverOffset: 4
    }]
};


const config1 = {
    type: 'doughnut',
    data: data1,
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 8,
                    boxHeight: 8,
                    font: {
                        size: 12
                    },
                    padding: 5
                }
            }
        }
    }
};


const grafico1 = document.getElementById('grafico1');

new Chart(grafico1, config1);

//Grafico de pizza | Grafico 2
const data2 = {
    labels: [
        'Moradia',
        'Lazer',
        'Mercado',
        'Outros'
    ],

    datasets: [{
        data: [300, 50, 100, 200],

        backgroundColor: [
            'rgb(43, 255, 0)',
            'rgb(0, 153, 255)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
        ],

        borderWidth: 0,
        hoverOffset: 4
    }]
};


const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 8,
                    boxHeight: 8,
                    font: {
                        size: 12
                    },
                    padding: 5
                }
            }
        }
    }
};


const grafico2 = document.getElementById('grafico2');

new Chart(grafico2, config2);

//Grafico colunas | grafico 5
const data5 = {
    labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho'
    ],

    datasets: [
        {
            label: 'Valor Poupado',
            data: [2000, 2500, 2200, 2800, 3000, 2700, 3200],

            backgroundColor: 'rgba(43, 255, 0, 0.5)',
            borderColor: 'rgb(43, 255, 0)',

            type: 'bar'
        },

        {
            label: 'Meta',
            data: [1500, 1800, 1700, 2100, 2300, 2000, 2400],

            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',

            type: 'line'
        }
    ]
};

const config5 = {
    type: 'bar',

    data: data5,

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
};

const grafico5 = document.getElementById('grafico5');

new Chart(grafico5, config5);

//Grafico de linhas | grafico 6
const data6 = {
    labels: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho'
    ],

    datasets: [
        {
            label: 'Receitas',
            data: [2000, 2500, 2200, 2800, 3000, 2700, 3200],
            borderColor: 'green',
            backgroundColor: 'green'
        },

        {
            label: 'Despesas',
            data: [1500, 1800, 1700, 2100, 2300, 2000, 2400],
            borderColor: 'red',
            backgroundColor: 'red'
        }
    ]
};


const config6 = {
    type: 'line',
    data: data6,
};


const grafico6 = document.getElementById('grafico6');

new Chart(grafico6, config6);