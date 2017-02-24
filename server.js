var express = require('express');
var app = express();
const PORT = 3000;

//RICHIESTE IN GET
app.get('/', function (req, res) {
    res.send('Ciao Mondo');
});
app.get('/posts', function (req, res) {
    console.log(app.mountpath);
    res.send('Lista dei post');
});
app.get('/posts/:id', function (req, res) {
    res.send('Dettaglio del post con id passato nella url');

});
//RICHIESTE IN POST DELETE DA PROVARE CON POSTMAN
app.post('/users/', function (req, res) {
    res.send('Richiesta in post, creazione di un utente');

});
app.delete('/users/:id', function (req, res) {
    res.send('Eliminazione dell\'utente dato il suo id');

});

//START DEL SERVER
app.listen(PORT, function () {
    console.log('Application start at localhost:' + PORT);
});