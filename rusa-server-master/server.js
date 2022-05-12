// import
const express = require("express") ;
const cors = require("cors") ;
const morgan = require("morgan") ;
var bodyParser = require("body-parser") ;
const pug = require("pug") ;
const app = express() ;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const port = 5000 ;

// FS
const api1 = require("./routes/api");
const connectDB = require("./db/connect");

// -middleware
// debug
app.use(cors(corsOptions));
app.use(morgan('tiny'));
// server-page
app.use(express.static('./views/assets'));
// app.set('views', './views');
app.set('view engine', 'pug');
// JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route's
app.get('/',(req,res)=>{
  res.render("index")
})
app.use("/api/v1", api1);

// init
const start = async () => {
  try {
    console.log("1. trying to connect")
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();