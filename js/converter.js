'use strict';

let textInput;
let textUpperCase;
let textLowerCase;
let textSentenceCase;
let textTitleCase;

function upperCase() {
    textInput = document.getElementById("original-text").value;
    textUpperCase = textInput.toUpperCase();
    document.getElementById("original-text").value = textUpperCase;
}

function lowerCase() {
    textInput = document.getElementById("original-text").value;
    textLowerCase = textInput.toLowerCase();
    document.getElementById("original-text").value = textLowerCase;
}

function sentenceCase() {
    textInput = document.getElementById("original-text").value;
    textSentenceCase = textInput.toLowerCase();

    // Remove extra whitespace
    textSentenceCase = textSentenceCase.replace(/\s+/g, ' ').trim();

    // Capitalize after periods
    textSentenceCase = textSentenceCase.split(". ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join(". ");

    // Capitalize after question marks
    textSentenceCase = textSentenceCase.split("? ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join("? ");

    // Capitalize after exclamation points
    textSentenceCase = textSentenceCase.split("! ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join("! ");

    // When the whole string begins with a single quote/apostrophe, the following should capitalize the first word.
    if (textSentenceCase.charAt(0) === `'`) {
        textSentenceCase = `'` + textSentenceCase.charAt(1).toUpperCase() + textSentenceCase.slice(2);
    }

    // When the whole string begins with a double quote, the following should capitalize the first word.
    if (textSentenceCase.charAt(0) === `"`) {
        textSentenceCase = `"` + textSentenceCase.charAt(1).toUpperCase() + textSentenceCase.slice(2);
    }

    document.getElementById("original-text").value = textSentenceCase;
}

function titleCase() {
    textInput = document.getElementById("original-text").value;
    textTitleCase = textInput.toLowerCase();
    textTitleCase = textTitleCase.split(' ');

    // Capitalize each word
    for (var i = 0; i < textTitleCase.length; i++) {
        textTitleCase[i] = textTitleCase[i].charAt(0).toUpperCase() + textTitleCase[i].slice(1);
    }
    textTitleCase = textTitleCase.join(' ');


   // Capitalize after double quotes
    textTitleCase = textTitleCase.split(`"`);
    for (var i = 0; i < textTitleCase.length; i++) {
        textTitleCase[i] = textTitleCase[i].charAt(0).toUpperCase() + textTitleCase[i].slice(1);
    }
    textTitleCase = textTitleCase.join(`"`);

   // Capitalize after single quotes. Because the basic character for a (non-smart) single quote is also an apostrophe, I don't
   // want to capitalize it in all circumstances. Thus, the following code only capitalizes a single quote following a space. That
   // should preserve lowercase around aprostrophes but not at the beginning of words. This should work in most cases, except when
   // a single quote starts the whole string (to be addressed below).
    textTitleCase = textTitleCase.split(` '`);
    for (var i = 0; i < textTitleCase.length; i++) {
        textTitleCase[i] = textTitleCase[i].charAt(0).toUpperCase() + textTitleCase[i].slice(1);
    }
    textTitleCase = textTitleCase.join(` '`);

    // When the whole string begins with a single quote/apostrophe, the following should capitalize the first word.
    if (textTitleCase.charAt(0) === `'`) {
        textTitleCase = `'` + textTitleCase.charAt(1).toUpperCase() + textTitleCase.slice(2);
    }

    document.getElementById("original-text").value = textTitleCase;
}