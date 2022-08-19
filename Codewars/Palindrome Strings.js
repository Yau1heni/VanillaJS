function isPalindrome(line) {
    return line == line.toString().split("").reverse().join("");
  }