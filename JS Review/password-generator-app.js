function generatePassword(length) {
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = [];
  for (let i = 0; i < length; i++)
    pass.push(str[Math.floor(Math.random() * str.length)]);
  return pass.join("");
}

const password = generatePassword(6);
console.log(`Generated password: ${password}`);

// versão melhorada 1:
function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const password = generatePassword(6);
console.log(`Generated password: ${password}`);

// versão melhorada 2:
function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  return Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }).join("");
}

const password = generatePassword(6);
console.log(`Generated password: ${password}`);
