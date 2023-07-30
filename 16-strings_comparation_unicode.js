function isAlphabet(letters) {
    if (letters.length === 0) {
      return false;
    }
  
    for (let i = 1; i < letters.length; i++) {
      const currentCharCode = letters[i].toLowerCase().charCodeAt(0);
      const prevCharCode = letters[i - 1].toLowerCase().charCodeAt(0);
  
      if (currentCharCode - prevCharCode !== 1) {
        return false;
      }
    }
  
    return true;
  }
  