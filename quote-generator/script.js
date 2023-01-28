const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// let apiQuotes = [];

// Show New Quote
function newQuote(){
    // Pick a random quote from apiQuote array
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author Field is Blan and replace it with 'Unkown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine styling
    if (quote.text.length > 120)
    {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    // authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    complete();
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent }`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On Load
// getQuotes();
newQuote();
