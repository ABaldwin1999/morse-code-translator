const latin =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",".",",","!","?"];
const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".-.-.-","--..--","-.-.--","..--.."]

 const getOutput = (valid, sentenceArray)=>{
    if(valid){
        return sentenceArray.join('');
    }
    else{
        return "Invalid input";
    }
 }

 const addSpacing = (sentenceArray, space) =>{
    if(sentenceArray.length >0){
        sentenceArray.push(space);
    }
 }

export const translateToMorse =(getInput)=>{
     const wordArray = getInput;
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
    return getOutput(valid, sentenceArray);
}

export const translateToEnglish =(getInput)=>{
    const wordArray = getInput;
    const sentenceArray =[];
    let valid =true;
    wordArray.forEach((word) => {
        const letterArray = word.split(' ');
        addSpacing(sentenceArray,' / ');
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
    return getOutput(valid, sentenceArray);   
}
