const sanitize = (text: string) => {
  text = text.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
  }); 

  return text.replace(/-/g," ").replace(/\//g," ").trim();
};

export default sanitize;