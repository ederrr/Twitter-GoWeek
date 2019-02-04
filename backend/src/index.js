const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//Conexão com o banco mongoDB através do mongoose, o acesso foi feito pelo mlab
mongoose.connect('mongodb://eder123:eder123@ds155203.mlab.com:55203/goweek-fullstack',{
	useNewUrlParser: true
});

app.use((req,res,next)=>{
	req.io = io;

	return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000,()=>{
	console.log('Server started on port 3000')
})