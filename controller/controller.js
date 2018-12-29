const mongoose = require('mongoose');
const connection = require('../db');
const consts = require('../consts');
const Athlete = require('../model/athlete');

const { MLAB_URL, DB_USER, DB_PASS } = consts
const options = { useNewUrlParser: true, useCreateIndex: true, user: DB_USER, pass: DB_PASS }

module.exports = {

    async getAllAthletes(req, res, next) {

        //waits for get all data
        const result = await Athlete.find({})
        if (result)
            res.json(result)
        else
            res.status(404).send('data not found')
    },

    async getAthleteByWinningsAndPlaySince(req, res, next) {

        const { winnings, playSince } = req.params
        //find objects where winning=x AND playSince=y
        const result = await Athlete.find({ winnings, playSince })
        if (result)
            res.json(result)
        else
            res.status(404).send('winnings or playSince was not found')
    },

    async updateAthlete(req, res, next) {
        mongoose

        const { id = null, winnings = null } = req.body;
        console.log(id);
        //add new key to specific document(who gets by id)
        const result = await Athlete.findOneAndUpdate({ id }, { $set: { winnings } }, { new: true })
        if (result) {
            console.dir(result);
            res.json(result)
        } else {
            res.status(404).send('id or winnings was not found')
        }
    }
}