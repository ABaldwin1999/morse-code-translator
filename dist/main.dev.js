"use strict";

var _translator = require("./translator.js");

var getTranslation0 = document.querySelector('.getTranslation0');
var getTranslation1 = document.querySelector('.getTranslation1');
var theTranslation = document.querySelector('.theTranslation'); // function gets user input and splits in up into individual words

var getInput = function getInput(splitValue) {
  return document.getElementById("message").value.split(splitValue);
};

var transEnglish = function transEnglish() {
  theTranslation.innerHTML = (0, _translator.translateToMorse)(getInput(' '));
};

var transMorse = function transMorse() {
  theTranslation.innerHTML = (0, _translator.translateToEnglish)(getInput(' / '));
};

getTranslation0.addEventListener("click", transEnglish);
getTranslation1.addEventListener("click", transMorse);