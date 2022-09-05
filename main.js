import { translateToEnglish } from "./translator.js";
import { translateToMorse } from "./translator.js";

const getTranslation0 = document.querySelector('.getTranslation0');
const getTranslation1 = document.querySelector('.getTranslation1');
const theTranslation = document.querySelector('.theTranslation');

// function gets user input and splits in up into individual words
const getInput = (splitValue) =>{
   return document.getElementById("message").value.split(splitValue);
}

const transEnglish = () =>{
    theTranslation.innerHTML = translateToMorse(getInput(' '));
}
const transMorse = () =>{
    theTranslation.innerHTML = translateToEnglish(getInput(' / '));
}

getTranslation0.addEventListener("click", transEnglish);

getTranslation1.addEventListener("click",transMorse);