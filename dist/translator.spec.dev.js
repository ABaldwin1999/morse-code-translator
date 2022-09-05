"use strict";

var _translator = require("./translator.js");

describe('Testing translateToMorse', function () {
  it('single letter returns corresponding symbol', function () {
    // Arrange
    var letter;
    var translation; // Act

    letter = "a";
    translation = (0, _translator.translateToMorse)([letter]); // Assert

    expect(translation).toBe(".-");
  });
  it('word returns corresponding symbols', function () {
    // Arrange
    var word;
    var translation; // Act

    word = ["cat"];
    translation = (0, _translator.translateToMorse)(word); // Assert

    expect(translation).toBe("-.-. .- -");
  });
  it('sentence returns corresponding symbols', function () {
    // Arrange
    var sentence;
    var translation; // Act

    sentence = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
    translation = (0, _translator.translateToMorse)(sentence); // Assert

    expect(translation).toBe("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
  });
  it('returns symbol for both upper and lower cases', function () {
    // Arrange
    var letter;
    var translation; // Act

    letter = "A";
    translation = (0, _translator.translateToMorse)([letter]); // Assert

    expect(translation).toBe(".-");
  });
  it('returns punctuated sentence fully translated', function () {
    // Arrange
    var translation;
    var word; // Act

    word = ["a", "new", "little", "dog."];
    translation = (0, _translator.translateToMorse)(word); // Assert

    expect(translation).toBe(".- / -. . .-- / .-.. .. - - .-.. . / -.. --- --. .-.-.-");
  });
});
describe('Testing translateToEnglish', function () {
  it('single symbol returns corresponding letter', function () {
    // Arrange
    var letter;
    var translation; // Act

    letter = ".-";
    translation = (0, _translator.translateToEnglish)([letter]); // Assert

    expect(translation).toBe("a");
  });
  it('symbols returns corresponding word', function () {
    // Arrange
    var word;
    var translation; // Act

    word = "-.-. .- -";
    translation = (0, _translator.translateToEnglish)([word]); // Assert

    expect(translation).toBe("cat");
  });
  it(' symbols separated by / returns corresponding sentence', function () {
    // Arrange
    var sentence;
    var translation; // Act

    sentence = ["- .... .", "--.- ..- .. -.-. -.-", "-... .-. --- .-- -.", "..-. --- -..-", ".--- ..- -- .--. ...", "--- ...- . .-.", "- .... .", ".-.. .- --.. -.--", "-.. --- --."];
    translation = (0, _translator.translateToEnglish)(sentence); // Assert

    expect(translation).toBe("the quick brown fox jumps over the lazy dog");
  });
  it('invalid symbol returns error message', function () {
    // Arrange
    var letter;
    var translation; // Act

    letter = "f/";
    translation = (0, _translator.translateToEnglish)([letter]); // Assert

    expect(translation).toBe("Invalid input");
  });
  it('returns punctuated sentence fully translated', function () {
    // Arrange
    var translation;
    var word; // Act

    word = [".-", "-. . .--", ".-.. .. - - .-.. .", "-.. --- --. .-.-.-"];
    translation = (0, _translator.translateToEnglish)(word); // Assert

    expect(translation).toBe("a new little dog.");
  });
});