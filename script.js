const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don’t take.",
    "The best way to predict your future is to create it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "You must be the change you wish to see in the world.",
    "It always seems impossible until it’s done.",
    "The journey of a thousand miles begins with one step.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Believe you can and you're halfway there.",
    "Be the change that you wish to see in the world.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Don’t count the days, make the days count.",
    "A person who never made a mistake never tried anything new.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Start where you are. Use what you have. Do what you can.",
    "Act as if what you do makes a difference. It does.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "In the middle of difficulty lies opportunity.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "If you can dream it, you can do it.",
    "Opportunities don't happen, you create them.",
    "I have not failed. I’ve just found 10,000 ways that won’t work.",
    "There are no shortcuts to any place worth going.",
    "Everything you can imagine is real.",
    "Nothing is impossible, the word itself says ‘I’m possible!’",
    "Do one thing every day that scares you.",
    "It’s not about how bad you want it. It’s about how hard you’re willing to work for it.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work, the luckier you get.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The key to success is to focus on goals, not obstacles.",
    "Doubt kills more dreams than failure ever will.",
    "Do what you can with all you have, wherever you are.",
    "Success is liking yourself, liking what you do, and liking how you do it."
]


const usedIndexes = new Set();
const quoteElemnt = document.getElementById('quote');

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }
    while(true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIndex)) continue;

        const quote = quotes[randomIndex];
        quoteElemnt.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break

    }
    
    
}