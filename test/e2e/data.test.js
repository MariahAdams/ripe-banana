const { execSync } = require('child_process');
const { join } = require('path');
const mongoose = require('mongoose');
const { dropDatabase } = require('./_db');
const filmsDataFile = join(__dirname, 'films-data.json');
const actorsDataFile = join(__dirname, 'actors-data.json');
const studiosDataFile = join(__dirname, 'studios-data.json');
const reviewersDataFile = join(__dirname, 'reviewers-data.json');
const usersDataFile = join(__dirname, 'users-data.json');
const reviewsDataFile = join(__dirname, 'reviews-data.json');

describe.only('DATA API', () => {

    beforeEach(() => dropDatabase());
    beforeEach(() => {
        execSync(`mongoimport --db ${mongoose.connection.name} --collection films --drop --file ${filmsDataFile}`);
        execSync(`mongoimport --db ${mongoose.connection.name} --collection actors --drop --file ${actorsDataFile}`);
        execSync(`mongoimport --db ${mongoose.connection.name} --collection studios --drop --file ${studiosDataFile}`);
        execSync(`mongoimport --db ${mongoose.connection.name} --collection users --drop --file ${usersDataFile}`);
        execSync(`mongoimport --db ${mongoose.connection.name} --collection reviewers --drop --file ${reviewersDataFile}`);
        execSync(`mongoimport --db ${mongoose.connection.name} --collection reviews --drop --file ${reviewsDataFile}`);
    });
   
    it('works', () => {

    });
});

// --out
// --jsonArray