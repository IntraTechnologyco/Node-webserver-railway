const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT;

//Handlebars configuration
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('home', {
      nombre : "Juan Rojas",
      titulo: "Curso de Node"
    });
  })

app.get('/index', (req, res) => {
  res.render('home', {
    nombre : "Juan Rojas",
    titulo: "Curso de Node"
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre : "Juan Rojas",
    titulo: "Curso de Node"
  });
})

  app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre : "Juan Rojas",
      titulo: "Curso de Node"
    })
  })
app.get('*', (req, res) =>{
    res.render( '404', {
      Code: 404
      
    })
    
  })


app.listen(port, () =>{
console.log('listening on port' + port);
})