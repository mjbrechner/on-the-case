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

    document.getElementById("original-text").value = textTitleCase;
}