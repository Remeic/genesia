export const generateRandomWord = (length) => {
  let string = "";
  for (let i = 0; i < length; i++) {
    let n = Math.floor(Math.random() * 10);
    string += String.fromCharCode(97 + n);
  }
  return string;
};
