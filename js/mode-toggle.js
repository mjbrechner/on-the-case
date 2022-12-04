'use strict';

let currentMode = localStorage.getItem("currentMode");

// Get current theme from localStorage upon page load.
if (currentMode === "dark") {
        document.body.style.backgroundColor = "#064635";
        document.body.style.color = "#F0BB62";
        document.getElementById("mode-toggle").style.backgroundColor = "#F0BB62";
        document.getElementById("mode-toggle").style.color = "#064635";
        document.getElementById("text-copied-message").style.backgroundColor = "#F0BB62";
        document.getElementById("text-copied-message").style.color = "#064635";
        document.getElementById("original-text").style.backgroundColor = "#F4EEA9";
        localStorage.setItem("currentMode", "dark");
        document.querySelector("a").style.color = "#F0BB62";
    } else {
        document.body.style.backgroundColor = "oldlace";
        document.body.style.color = "#064635";
        document.getElementById("mode-toggle").style.backgroundColor = "#064635";
        document.getElementById("mode-toggle").style.color = "oldlace";
        document.getElementById("text-copied-message").style.backgroundColor = "#064635";
        document.getElementById("text-copied-message").style.color = "oldlace";
        document.getElementById("original-text").style.backgroundColor = "white";
        localStorage.setItem("currentMode", "light");
        document.querySelector("a").style.color = "#064635";
    }

// Toggle mode when the theme button is pressed.
function modeToggle() {
    
    if (currentMode === "light") {
        currentMode = "dark";
        document.body.style.backgroundColor = "#064635";
        document.body.style.color = "#F0BB62";
        document.getElementById("mode-toggle").style.backgroundColor = "#F0BB62";
        document.getElementById("mode-toggle").style.color = "#064635";
        document.getElementById("text-copied-message").style.backgroundColor = "#F0BB62";
        document.getElementById("text-copied-message").style.color = "#064635";
        document.getElementById("original-text").style.backgroundColor = "#F4EEA9";
        localStorage.setItem("currentMode", "dark");
        document.querySelector("a").style.color = "#F0BB62";
    } else {
        currentMode = "light";
        document.body.style.backgroundColor = "oldlace";
        document.body.style.color = "#064635";
        document.getElementById("mode-toggle").style.backgroundColor = "#064635";
        document.getElementById("mode-toggle").style.color = "oldlace";
        document.getElementById("text-copied-message").style.backgroundColor = "#064635";
        document.getElementById("text-copied-message").style.color = "oldlace";
        document.getElementById("original-text").style.backgroundColor = "white";
        localStorage.setItem("currentMode", "light");
        document.querySelector("a").style.color = "#064635";
    }
}