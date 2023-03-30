export const randomId = (length) => {
  const characters =
    '0123456789abcdefghijklmnopqrstxyzABCDEFGHIJKLMNOPQRSTXYZ!"£$%^&*';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
