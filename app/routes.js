// all the routes for our application

module.exports = function(app, restcalls){

    app.get('/', restcalls.renderHomePage)

    app.get('*', function(req, res){
        res.send('<h5>This is a 404 page</h5>')
    })

}