# Mixed Messages: Random Reading Prompt Generator

A Node.js command-line program that generates a random reading prompt each time it runs. Built as a portfolio project for Codecademy's Full-Stack Engineer path.

## Example output

```
Your reading prompt is:
Read a fantasy book that has a one-word title.
Read it in a hammock for 30 minutes while enjoying a cup of tea.
Afterwards, take a moment to predict how the book ends.
```

## How it works

The program stores six categories of options in an object:
- Genre
- Challenge
- Location
- Time challenge
- Snack or drink
- Reflection

A helper function picks a random option from each category, and the results are combined into a prompt using template literals.

## How to run

1. Make sure Node.js is installed
2. Clone this repository:
   ```
   git clone https://github.com/Harley200-LJ/mixed-messages.git
   ```
3. Move into the folder and run:
   ```
   cd mixed-messages
   node main.js
   ```

## Technologies

- JavaScript
- Node.js
- Git and GitHub

## What I learned

- Storing data in objects and arrays
- Generating random array indexes with `Math.random()` and `Math.floor()`
- Building strings with template literals
- Using Git from the command line and pushing to GitHub