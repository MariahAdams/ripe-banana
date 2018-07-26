const { assert } = require('chai');
const request = require('./request');
const { execSync } = require('child_process');
const { join } = require('path');
const mongoose = require('mongoose');


const filename = join(__dirname, 'films-data.json');

describe.only('DATA API', () => {

    beforeEach(() => {
        const cmd = `mongoimport --db ${mongoose.connection.name} --collection films --drop --file ${filename}`;
        execSync(cmd);
    });

    it('works', () => {

    });

});

// const { assert } = require('chai');
// const request = require('./request');
// const { dropCollection } = require('./_db');
// const { save } = request;
// const data = require('./data');

// describe.only('SAVING DATA', () => {

//     beforeEach(() => dropCollection('reviews'));

//     it.skip('saves users', () => {
//         return save(data.reviewers[0], 'reviewers/signup')
//             .then(() => save(data.reviewers[1], 'reviewers/signup'))
//             .then(() => save(data.reviewers[2], 'reviewers/signup'))
//             .then(() => save(data.reviewers[3], 'reviewers/signup'))
//             .then(() => save(data.reviewers[4], 'reviewers/signup'))
//             .then(() => save(data.reviewers[5], 'reviewers/signup'))
//             .then(() => save(data.reviewers[6], 'reviewers/signup'));
//     });

//     it.skip('saves studios', () => {
//         return save(data.studios, 'studios');
//     });

//     it.skip('saves actors', () => {
//         return save(data.actors, 'actors');
//     });

//     it('saves films', () => {
//         return save(data.films, 'films');
//     });

//     it.skip('saves reviews', () => {
//         return save(data.reviews, 'reviews');
//     });
// });