import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it('single letter returns corresponding symbol', ()=> {
    // Arrange
      let letter;
      let translation;
    // Act
      letter = "a";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe(".-");
  })
  it('word returns corresponding symbols', ()=> {
    // Arrange
      let word;
      let translation;
    // Act
      word = "cat";
      translation= translateToMorse(word);
    // Assert
    expect(translation).toBe("-.-. .- -");
  })
  it('sentence returns corresponding symbols', ()=> {
    // Arrange
      let sentence;
      let translation;
    // Act
      sentence = "the quick brown fox jumps over the lazy dog";
      translation= translateToMorse(sentence);
    // Assert
    expect(translation).toBe("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
  })   
  it('returns symbol for both upper and lower cases', ()=> {
    // Arrange
      let letter;
      let translation;
    // Act
      letter = "A";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe(".-");
  })
  it('returns punctuated sentence fully translated', ()=> {
    // Arrange
    let translation;
      let word;
    // Act
      word = "a new little dog.";
      translation= translateToMorse(word);
    // Assert
    expect(translation).toBe(".- / -. . .-- / .-.. .. - - .-.. . / -.. --- --. .-.-.-");
  })
 })

 describe('Testing translateToEnglish', () => {
  it('single symbol returns corresponding letter', ()=> {
    // Arrange
      let letter;
      let translation;
    // Act
      letter = ".-";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe("a");
  })
  it('symbols returns corresponding word', ()=> {
    // Arrange
      let word;
      let translation;
    // Act
      word = "-.-. .- -";
      translation= translateToMorse(word);
    // Assert
    expect(translation).toBe("cat");
  })
  it(' symbols separated by / returns corresponding sentence', ()=> {
    // Arrange
      let sentence;
      let translation;
    // Act
      sentence = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";
      translation= translateToMorse(sentence);
    // Assert
    expect(translation).toBe("the quick brown fox jumps over the lazy dog");
  })   
  it('invalid symbol returns error message', ()=> {
    // Arrange
      let letter;
      let translation;
    // Act
      letter = "f/";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe("Invalid input");
  })
  it('returns punctuated sentence fully translated', ()=> {
    // Arrange
    let translation;
      let word;
    // Act
      word = ".- / -. . .-- / .-.. .. - - .-.. . / -.. --- --. .-.-.-";
      translation= translateToMorse(word);
    // Assert
    expect(translation).toBe("a new little dog.");
  })
 })