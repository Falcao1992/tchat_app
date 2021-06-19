const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('route depart')
});

app.use('/user', require('./router/user'))
app.use('/conversation', require('./router/conversation'))
app.use('/message', require('./router/message'))



const port = 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})