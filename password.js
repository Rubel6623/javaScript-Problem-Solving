const passwordGenerator=(length)=>{
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=<>?/[]{},.:;';

  const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    // console.log(randomIndex);
    password += allCharacters[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const randomPassword = passwordGenerator(passwordLength);
console.log("Generated password is :", randomPassword);
