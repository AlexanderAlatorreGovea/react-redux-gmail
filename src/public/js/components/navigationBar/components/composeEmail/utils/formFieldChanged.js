function formFieldChanged(originalForm, currentForm) {
  const keys = Object.keys(originalForm);

  return keys.some((key) => {
    const hasFormFieldChanged = originalForm[key] !== currentForm[key];
    return hasFormFieldChanged;
  });
}

module.exports = formFieldChanged;
