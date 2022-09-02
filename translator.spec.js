import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it('single letter returns corresponding symbol', ()=> {
    // Arrange
      let letter;
    // Act
      letter = "a";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe(".-");
  })
  it('word returns corresponding symbols', ()=> {
    // Arrange
      let word;
    // Act
      word = "cat";
      translation= translateToMorse(word);
    // Assert
    expect(translation).toBe("-.-. .- -");
  })
  it('sentence returns corresponding symbols', ()=> {
    // Arrange
      let sentence;
    // Act
      sentence = "the quick brown fox jumps over the lazy dog";
      translation= translateToMorse(sentence);
    // Assert
    expect(translation).toBe("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
  })
  it('returns symbol for both upper and lower cases', ()=> {
    // Arrange
      let letter;
    // Act
      word = "A";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe(".-");
  })
  it('returns punctuated sentence fully translated', ()=> {
    // Arrange
      let letter;
    // Act
      word = "a new little dog.";
      translation= translateToMorse(letter);
    // Assert
    expect(translation).toBe(".-");
  })

 })