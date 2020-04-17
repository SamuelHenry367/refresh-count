const express = require('express');
const redis = require('redis');
const process = require('process')

const app = express();
const client = redis.createClient({
    host:'redis-server',    //actually with connection url, here docker-comoiser service reson that holds connection
    port: 6379  //Default redis port
});
client.set('visits', 0);

app.get('/', (req, res) => {
//Below is to check restart docker-compose by creating error 
//    process.exit(0) //Default 0:OK, 0< -> something went wrong
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits)
        client.set('Vists', parseInt(visits) + 1)
    })
});

app.listen(8080, () => {
    console.log('Listerning on port 8080')
});