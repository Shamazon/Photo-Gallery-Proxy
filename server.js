const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 1338);
app.use(express.static('public'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(app.get('port'), () => {
    console.log(`Serving up pictures on port ${app.get('port')}`);
}); 