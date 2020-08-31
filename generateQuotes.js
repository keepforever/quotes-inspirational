const fs = require('fs');
const quotesData = require('./data/quotes.json');

let categoryDictionary = {};
let authorDictionary = {};
let popularityOver50Quotes = [];
let failureQuotes = [];

const main = () => {
    for (const quote of quotesData) {
        // console.log('\n', '\n', `quote = `, quote, '\n', '\n');
        if (!categoryDictionary[quote.Category]) {
            categoryDictionary[quote.Category] = quote.Category.toLowerCase();
        }

        if (!authorDictionary[quote.Author]) {
            authorDictionary[quote.Author] = quote.Author.split(', ')[0];
        }

        if (quote.Popularity > 0.1) {
            popularityOver50Quotes.push(quote);
        }

        if (quote.Tags.includes('approve')) {
            failureQuotes.push(quote);
        }
    }

    // const stringifiedFinalCardDictFull = JSON.stringify(finalCardDictFull);
    // fs.writeFile('./generated/quotes-filtered.json', stringifiedFinalCardDictFull, err => {
    //     if (err) {
    //         console.log('Error writing quotes-filtered.json', err);
    //     } else {
    //         console.log('Successfully wrote quotes-filtered.json');
    //     }
    // });
};

main();
