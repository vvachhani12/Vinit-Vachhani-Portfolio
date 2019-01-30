const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./controllers/portfolio_controller');


const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(__dirname+'/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:"+PORT);
})


