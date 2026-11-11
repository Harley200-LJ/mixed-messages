const readingPrompts = {
    genre: ['mystery', 'romance', 'science fiction', 'fantasy', 'historical fiction', 'non-fiction', 'thriller', 'horror', 'biography', 'self-help'],
    challenge: ['was published before you were born', 'has a one-word title', 'is set in a country, you have never visited', 'was written by a debut author', 'has been on your shelf for over a year', 'was recommended by a friend', 'is a book you have been meaning to read for a long time', 'is a book that has won an award'],
    location: ['in a park', 'at the beach', 'in a cozy café', 'on a train', 'in a library', 'in a hammock', 'on a balcony', 'in a treehouse', 'by a fireplace', 'in a garden'],
    timeChallenge: ['15 Minutes', '30 Minutes', 'one full chapter', '50 Pages', 'until you finish your drink'],
    snackOrDrink: ['cup of tea', 'hot chocolate', 'biscuit(or three)', 'glass of lemonade', 'slice of cake'],
    reflection: ['write down your favourite quote', 'predict how the book ends', 'describe the main character in 3 words', 'recommend it to someone', 'rate it out of 10']
};

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const generatePrompt = () => {
    const lines = [
        'Your reading prompt is:',
        `Read a ${getRandomItem(readingPrompts.genre)} book that ${getRandomItem(readingPrompts.challenge)}.`,
        `Read it ${getRandomItem(readingPrompts.location)} for ${getRandomItem(readingPrompts.timeChallenge)} while enjoying a ${getRandomItem(readingPrompts.snackOrDrink)}.`,
        `Afterwards, take a moment to ${getRandomItem(readingPrompts.reflection)}.`
    ];
    return lines.join(`\n`);
};

console.log(generatePrompt());