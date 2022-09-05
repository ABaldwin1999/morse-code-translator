"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToEnglish = exports.translateToMorse = void 0;
var latin = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ",", "!", "?"];
var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-.-.-", "--..--", "-.-.--", "..--.."];

var getOutput = function getOutput(valid, sentenceArray) {
  if (valid) {
    return sentenceArray.join('');
  } else {
    return "Invalid input";
  }
};

var addSpacing = function addSpacing(sentenceArray, space) {
  if (sentenceArray.length > 0) {
    sentenceArray.push(space);
  }
};

var translateToMorse = function translateToMorse(getInput) {
  var wordArray = getInput;
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
  return getOutput(valid, sentenceArray);
};

exports.translateToMorse = translateToMorse;

var translateToEnglish = function translateToEnglish(getInput) {
  var wordArray = getInput;
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
  return getOutput(valid, sentenceArray);
};

exports.translateToEnglish = translateToEnglish;