const isValid = (s) => {
  let stack = s.split("");
  if (stack.length % 2 != 0) return false;

  let arr = [];
  while (stack.length) {
    let topElem = stack.pop();
    if (topElem === ")" || topElem === "}" || topElem === "]") {
      arr.push(topElem);
    } else {
      let temp = arr.pop();
      if (
        !(
          (topElem === "(" && temp === ")") ||
          (topElem === "[" && temp === "]") ||
          (topElem === "{" && temp === "}")
        )
      ) {
        return false;
      }
    }
  }
  if (arr.length) return false;
  return true;
};

console.log(isValid("[({}}}}}")); // false
