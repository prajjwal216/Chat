function phoneValidation(number) {
  const containsDigits = /\d{10}/;
  if (containsDigits.test(number)) {
    return true;
  } else {
    return false;
  }
}

export {phoneValidation};
