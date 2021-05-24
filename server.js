const express=require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();
const client = require('./db');
const bodyParser = require('body-parser');

   
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`connected to port${PORT}`)

});
app.get('/', async(req,res)=>{
try{
    const User = await client.query(`select * from suser;`);
    res.json(User);
    console.log(User);

}
catch(err){
    console.log(err)

}

})
app.get('/',(req,res)=>{
    res.send('HI IAM here')
})
