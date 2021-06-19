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

app.use('/user', require('./router/user'))
app.use('/conversation', require('./router/conversation'))
app.use('/message', require('./router/message'))

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('route depart')
});

const port = 8000

app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${port}`)
})