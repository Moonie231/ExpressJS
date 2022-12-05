const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('register');
})

const arrUser = [];
app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password){
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        arrUser.push(user);
        console.log(arrUser);
        res.render('success', {user: user});
    } else {
        res.render('error')
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})