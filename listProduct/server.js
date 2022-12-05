const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const product = [
    {title: 'iphone',
     img: 'img/iphone.jpg'
    },
    {title: 'oppo',
        img: 'img/oppo.jpg'
    },
    {title: 'samsung',
        img: 'img/samsung.jpg'
    },
    {title: 'xiaomi',
        img: 'img/xiaomi.jpg'
    }
]

app.get('/',((req, res) => {
    res.render('home', {data: product})
}))

app.listen(3000, () => {
    console.log('server is running on port 3000');
})