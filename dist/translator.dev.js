"use strict";

var latin = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ",", "!", "?"];
var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-.-.-", "--..--", "-.-.--", "..--.."];
var getTranslation0 = document.querySelector('.getTranslation0');
var getTranslation1 = document.querySelector('.getTranslation1');
var theTranslation = document.querySelector('.theTranslation'); // function gets user input and splits in up into individual words

var getInput = function getInput(splitValue) {
  return document.getElementById("message").value.split(splitValue);
};

var getOutput = function getOutput(valid, sentenceArray) {
  if (valid) {
    theTranslation.innerHTML = sentenceArray.join('');
  } else {
    theTranslation.innerHTML = "Invalid input";
  }
};

var addSpacing = function addSpacing(sentenceArray, space) {
  if (sentenceArray.length > 0) {
    sentenceArray.push(space);
  }
};

var translateToMorse = function translateToMorse() {
  var wordArray = getInput(' ');
  var sentenceArray = [];
  var valid = true;
  wordArray.forEach(function (word) {
    var letterArray = word.split('');
    addSpacing(sentenceArray, ' / ');
    letterArray.forEach(function (letter) {
      if (latin.includes(letter.toUpperCase())) {
        sentenceArray.push(morse[latin.indexOf(letter.toUpperCase())]);

        if (letterArray.indexOf(letter) != letterArray.length - 1) {
          sentenceArray.push(' ');
        }
      } else {
        valid = false;
      }
    });
  });
  getOutput(valid, sentenceArray);
};

var translateToEnglish = function translateToEnglish() {
  var wordArray = getInput(' / ');
  var sentenceArray = [];
  var valid = true;
  wordArray.forEach(function (word) {
    var letterArray = word.split(' ');
    addSpacing(sentenceArray, ' ');
    letterArray.forEach(function (letter) {
      if (morse.includes(letter)) {
        var thisLetter = latin[morse.indexOf(letter)];
        sentenceArray.push(thisLetter.toLowerCase());
      } else {
        valid = false;
      }
    });
  });
  getOutput(valid, sentenceArray);
};

getTranslation0.addEventListener("click", translateToMorse);
getTranslation1.addEventListener("click", translateToEnglish);