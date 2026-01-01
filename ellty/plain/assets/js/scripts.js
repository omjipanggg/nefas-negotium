const allCheckbox = document.querySelector('.header input');
const pageCheckboxes = document.querySelectorAll('.list input');

allCheckbox.addEventListener('change', (el) => {
  pageCheckboxes.forEach((checkBox) => {
	checkBox.checked = allCheckbox.checked;
	checkBox.previousElementSibling.style.fontWeight = allCheckbox.checked ? '500' : '400';
  });
  el.target.previousElementSibling.style.fontWeight = allCheckbox.checked ? '500' : '400';
});

pageCheckboxes.forEach(checkBox => {
  checkBox.addEventListener('change', () => {
    allCheckbox.checked = [...pageCheckboxes].every(c => c.checked);
  });
});

const allButtons = document.querySelector('.btn');

allButtons.addEventListener('click', (el) => {
	const btn = el.currentTarget;
	const initialText = btn.textContent;

	btn.textContent = 'Submitting...';
	btn.disabled = true;

	setTimeout(() => {
		// alert('btn clicked yay');
		console.log('btn clicked yay');

		btn.textContent = initialText;
		btn.disabled = false;
	}, 840);
});
