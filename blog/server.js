const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('blog');
})

const arrBlog = [];
app.post('/user/blog', upload.none(), (req, res) => {
        const blog = {
            title: req.body.title,
            content: req.body.content
        }
        arrBlog.push(blog);
        console.log(arrBlog);
        res.render('view', {blog: blog});
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})