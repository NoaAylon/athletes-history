const express = require('express');
const athlete_ctrl = require('./controller/controller');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/athlete', athlete_ctrl.updateAthlete);
app.get('/athletes', athlete_ctrl.getAllAthletes);
app.get('/athlete/:winnings/:playSince', athlete_ctrl.getAthleteByWinningsAndPlaySince);

app.listen(port, () => console.log(`Express server ready for request on: ${port}!`));