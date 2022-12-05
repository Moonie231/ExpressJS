const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const array = [
    {
        title: "Ua aloo",
        content: "???"
    },
    {
        title: "title 2",
        content: "content 2"
    }
]
app.get('/', (req, res) => {
    res.render("home", {data: array});
});

app.listen(3000, ()=> {
    console.log(`server is running on port 3000`)
})