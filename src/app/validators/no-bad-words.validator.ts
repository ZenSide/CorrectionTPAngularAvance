const badWords = ['flute','zut'];

export const noBadWordsValidator = control => {

  const foundWords = [];
  badWords.forEach(word=>{
    if (control.value.includes(word)) foundWords.push(word);
  })
  if (foundWords.length>0) {
    return {
      noBadWords: {
        badWords: foundWords
      }
    }
  }
  return null;
}
