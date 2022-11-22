module.exports = (app) => {
    //rota aleatória
    app.get('/sobre', (req, res) => {
        //res.send('qualquer coisa')
        res.render('sobre.ejs')
    })
}