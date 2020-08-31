const fs = require('fs');
const ss = require('simple-statistics');
const quotesData = require('./data/quotes.json');

let popularityArray = [];
let writePayload = [];

const deDuplicatedQuotesData = quotesData.filter((v, i, a) => a.findIndex(t => t.Quote === v.Quote) === i);

const main = () => {
    console.log('\n', '\n', `quotesData.length = `, quotesData.length, '\n', '\n');
    for (const quote of deDuplicatedQuotesData) {
        quote.Popularity * 10000 > 50.0 && popularityArray.push(quote.Popularity * 10000);
        quote.Popularity * 10000 > 50.0 && writePayload.push({ quote: quote.Quote, author: quote.Author });
    }

    const stats = {
        mean: ss.mean(popularityArray),
        sDev: ss.standardDeviation(popularityArray),
        mode: ss.mode(popularityArray),
        min: ss.min(popularityArray),
        max: ss.max(popularityArray)
    };

    console.log('\n', '\n', `stats = `, stats, '\n', '\n');
    console.log('\n', '\n', `popularityArray.length = `, popularityArray.length, '\n', '\n');

    const payload = JSON.stringify(writePayload);
    fs.writeFile('./generated/quotes-filtered.json', payload, err => {
        if (err) {
            console.log('Error writing quotes-filtered.json', err);
        } else {
            console.log('Successfully wrote quotes-filtered.json');
        }
    });

    // fs.writeFile('./generated/de-duplicated-quotes.json', JSON.stringify(deDuplicatedQuotesData.map(q => ({ quote: q.Quote, author: q.Author}))), err => {
    //     if (err) {
    //         console.log('Error writing quotes-filtered.json', err);
    //     } else {
    //         console.log('Successfully wrote de-duplicated-quotes.json');
    //     }
    // });
};

main();
