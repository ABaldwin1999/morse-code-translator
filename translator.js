const latin =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const morse=[".-","-...","-.-.",".--",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

export const translateToMorse =(message)=>{
    let wordArray = message.split(' ');
    wordArray.forEach((word) => {
        let letterArray = word.split('');
        letterArray.forEach((letter) =>{
            letter.toUpperClass()
        })
    });

}
