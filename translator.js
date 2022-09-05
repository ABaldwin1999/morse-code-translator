const latin =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",".",",","!","?"];
const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".-.-.-","--..--","-.-.--","..--.."]

 const getTranslation0 = document.querySelector('.getTranslation0');
 const getTranslation1 = document.querySelector('.getTranslation1');
 const theTranslation = document.querySelector('.theTranslation');

 // function gets user input and splits in up into individual words
 const getInput = (splitValue) =>{
    return document.getElementById("message").value.split(splitValue);
 }

 const getOutput = (valid, sentenceArray)=>{
    if(valid){
        theTranslation.innerHTML = sentenceArray.join('');
    }
    else{
        theTranslation.innerHTML = "Invalid input";
    }
 }

 const addSpacing = (sentenceArray, space) =>{
    if(sentenceArray.length >0){
        sentenceArray.push(space);
    }
 }

 const translateToMorse =()=>{
     const wordArray = getInput(' ');
     const sentenceArray =[];
     let valid = true;
     wordArray.forEach((word) => {
         const letterArray = word.split('');
         addSpacing(sentenceArray,' / ');
         letterArray.forEach((letter) =>{
            if(latin.includes(letter.toUpperCase())){
                sentenceArray.push(morse[latin.indexOf(letter.toUpperCase())]);
                if((letterArray.indexOf(letter) != letterArray.length -1)){
                    sentenceArray.push(' ');
                }
            }
            else{
                valid = false;
            }
         })
     });
     getOutput(valid, sentenceArray);
}

 const translateToEnglish =()=>{
    const wordArray = getInput(' / ');
    const sentenceArray =[];
    let valid =true;
    wordArray.forEach((word) => {
        const letterArray = word.split(' ');
        addSpacing(sentenceArray,' ');
        letterArray.forEach((letter) =>{
            if(morse.includes(letter)){
                let thisLetter =latin[morse.indexOf(letter)];
                sentenceArray.push(thisLetter.toLowerCase());
            }
            else{
                valid = false;
            }
        })
    });
    getOutput(valid, sentenceArray);   
}

getTranslation0.addEventListener("click", translateToMorse);

getTranslation1.addEventListener("click", translateToEnglish);