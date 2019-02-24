const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('short'));
app.use('/todos',routes);


app.use((req, res, next)=>{

   
        const err = new Error("Not Found");
        res.status(404).send(err.message);
        next();   

})



const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log('server is running at port :', port);
})