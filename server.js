const epxress = require('express');
const app = epxress();

const data = [
    {
        id: 1,
        name: 'roscom',
        status: 'test'
    },
    {
        id: 2,
        name: 'knight',
        status: 'lox'
    }
]

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data));
})

app.listen(3000, () => {
    console.log('Работает тип')
})
