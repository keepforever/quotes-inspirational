const fs = require('fs');
const quotesData = require('./mtgadata/quotes.json');

let filteredQuotesArray = [];
let categoryDictionary = {};
let authorDictionary = {};
let popularityOver50Quotes = [];
let failureQuotes = [];
let popularityArray = [];

// generateCardDictSample();

const finalCardDictFull = {};

const main = () => {
    console.log('\n', '\n', `quotesData.length = `, quotesData.length, '\n', '\n');
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
    // console.log('\n', '\n', `authorDictionary = `, authorDictionary, '\n', '\n');
    console.log(
        '\n',
        '\n',
        `Object.keys(authorDictionary).length = `,
        Object.keys(authorDictionary).length,
        '\n',
        '\n'
    );
    console.log('\n', '\n', `Object.keys(authorDictionary) = `, Object.keys(authorDictionary), '\n', '\n');
    // console.log('\n', '\n', `categoryDictionary = `, categoryDictionary, '\n', '\n');
    // console.log('\n', '\n', `popularityOver50Quotes.length = `, popularityOver50Quotes.length, '\n', '\n');
    // console.log('\n', '\n', `failureQuotes.length = `, failureQuotes.length, '\n', '\n');
    // console.log('\n', '\n', `failureQuotes = `, failureQuotes, '\n', '\n');
    // console.log('\n', '\n', `finalCardDictFull = `, finalCardDictFull, '\n', '\n');

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
