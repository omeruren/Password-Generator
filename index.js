function generatePassword() {
  const length = document.getElementById("Length").value;
  const includeLowerCase = document.getElementById("LowerCases").checked;
  const includeUpperCase = document.getElementById("Upper").checked;
  const includeNumbers = document.getElementById("Numbers").checked;
  const includeSybmbols = document.getElementById("Symbols").checked;

  const lowerCaseChars = "abcdçdefghıijklmnoöpqrsştuüvxyz";
  const UpperUpperCaseChars = "ABCÇDEFGHIİJKLMNOÖPQRSŞTUÜVYZ";
  const numberChars = "0123456789";
  const symbolChars = "@!'^+%&/()=?_-+-/*";

  let AllowedChars = "";
  let password = "";

  if (includeLowerCase) AllowedChars += lowerCaseChars;
  if (includeUpperCase) AllowedChars += UpperUpperCaseChars;
  if (includeNumbers) AllowedChars += numberChars;
  if (includeSybmbols) AllowedChars += symbolChars;

  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSybmbols
  ) {
    return (document.getElementById("result").innerText =
      "Pick at least one statment");
  } else if (length <= 0) {
    return (document.getElementById("result").innerText =
      "You need to set length of password ");
  }
 

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * AllowedChars.length);
    password += AllowedChars[randomIndex];
  }
  document.getElementById("result").innerText = password;
}


