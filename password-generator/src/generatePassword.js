const numbers = "0123456789";
const lcasechars = "abcdefghijklmnopqrstuvwxyz";
const ucasechars = lcasechars.toUpperCase();
const specialchars = "!@#$%^&*()";

export const generatePassword = ({ lowercase, uppercase, special, length }) => {
  const charList = [
    numbers,
    lowercase ? lcasechars : [],
    uppercase ? ucasechars : [],
    special ? specialchars : [],
  ].join("");

  return Array.from({ length }, () =>
    Math.floor(Math.random() * charList.length)
  )
    .map((n) => charList[n])
    .join("");
};
