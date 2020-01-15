const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-8h5vf.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Configuração para todas as rotas
app.use(express.json());
app.use(routes);



// MongoDB (não-relacinal)



app.listen(3333);