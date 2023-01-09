// add space to string input
const addSpace = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.length % 5 == 0) {
      result += ` ${str[i]}`;
    } else {
      result += str[i];
    }
  }
  return result;
};

//add space with regex
num.value = num.value
  .replace(/[^0-9A-Za-z]/g, "")
  .replace(/(.{4})/g, "$1 ")
  .trim();
