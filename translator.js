const latin =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",".",",","!","?"];
const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".-.-.-","--..--","-.-.--","..--.."]

const getTranslation = document.querySelector('.getTranslation');
const theTranslation = document.querySelector('.theTranslation');

const translateToMorse =()=>{
    const wordArray = document.getElementById("message").value.split(' ');
    const sentenceArray =[];
    wordArray.forEach((word) => {
        const letterArray = word.split('');
        if(sentenceArray.length >0){
            sentenceArray.push(' / ');
        }
        letterArray.forEach((letter) =>{
            sentenceArray.push(morse[latin.indexOf(letter.toUpperCase())]);
            if((letterArray.indexOf(letter) != letterArray.length -1)){
                sentenceArray.push(' ');
            }
        })
    });
    theTranslation.innerHTML = sentenceArray.join('');
}

getTranslation.addEventListener("click", translateToMorse);