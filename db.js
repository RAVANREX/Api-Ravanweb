
const {Pool,Client} = require('pg');
const connectionString = "postgres://vzoxbefaahndsg:6c8dd087bcd3904e767b7c3509c75641acdcb37860cec34863936cb8d04638fe@ec2-54-247-158-179.eu-west-1.compute.amazonaws.com:5432/d6a4km4cb128g4";

const client = new Client({
    connectionString:connectionString,
    ssl: {
        rejectUnauthorized: false
      }

})
client.connect();


client.query('select * from suser;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
   
  });

module.exports = client