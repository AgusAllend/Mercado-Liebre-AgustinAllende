const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3030

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.listen(port, () => console.log("Esto fue exitoso"));

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
});

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html" );
    res.sendFile(htmlPath)
})

app.get("/reg", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/reg.html" );
    res.sendFile(htmlPath)
})
app.post('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
});
