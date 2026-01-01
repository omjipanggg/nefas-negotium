const allCheckbox = document.querySelector('.header input');
const pageCheckboxes = document.querySelectorAll('.list input');

allCheckbox.addEventListener('change', () => {
  pageCheckboxes.forEach(checkBox => checkBox.checked = allCheckbox.checked);
});

pageCheckboxes.forEach(checkBox => {
  checkBox.addEventListener('change', () => {
    allCheckbox.checked = [...pageCheckboxes].every(c => c.checked);
  });
});
