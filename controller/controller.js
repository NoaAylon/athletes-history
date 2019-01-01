const connection = require('../db');
const Athlete = require('../model/athlete');

module.exports = {

    async getAllAthletes(req, res, next) {

        //waits for get all data
        const result = await Athlete.find({})
        if (result.length != 0)
            res.json(result)
        else
            res.status(404).send('data not found')
    },

    async getAthleteByWinningsAndPlaySince(req, res, next) {

        const { winnings, playSince } = req.params
        //find objects where winning=x AND playSince=y
        const result = await Athlete.find({ winnings, playSince })
        if (result.length != 0)
            res.json(result)
        else
            res.status(404).send('winnings or playSince does not exist')
    },

    async updateAthlete(req, res, next) {

        const { id = null, winnings = null } = req.body;
        //changing the winning of specific document(who gets by id)
        const result = await Athlete.findOneAndUpdate({ id }, { $set: { winnings } }, { new: true })
        if (result != 0) {
            console.dir(result);
            res.json(result)
        } else {
            res.status(404).send('id does not exist')
        }
    }
}