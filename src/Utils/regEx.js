export const yearRegExp = (year) => {
  const yearRegExp = /^(19\d{2}|2\d{3})$/;
  const currentYear = new Date().getFullYear();

  if (yearRegExp.test(year)) {
    if (parseInt(year) >= 1900 && parseInt(currentYear) >= parseInt(year)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
