const latin =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const morse=[".-","-...","-.-.",".--",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

export const translateToMorse =(message)=>{
    const wordArray = message.split(' ');
    wordArray.forEach((word) => {
        const letterArray = word.split('');
        if(sentenceArray.length >0){
            sentenceArray.push('/ ');
        }
        letterArray.forEach((letter) =>{
            sentenceArray.push(morse[latin.indexOf(letter.toUpperClass())]);
            sentenceArray.push(' ');
        })
    });

}
