const quotes = [
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes [Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;