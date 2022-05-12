const express = require('express');
const app = express();
const morgan = require('morgan');
const port  = 5003 ;
var cors = require('cors')
app.use(cors())
app.use(morgan('tiny'))
app.get('/',(req,res)=>{
	res.json(require("../db/test.json"))
	// res.json({"name":"Piyush"})
})
app.post('/',(req,res)=>{
	res.send(req.params)
	// console.log(res.params.name)
})

app.listen(port,()=>{
	console.log(`Listeninng on port ${port}`)
})


