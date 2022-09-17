const allRates = document.querySelectorAll('.card__circle--rating');
const submitBtn = document.querySelector('.card__btn-submit');
const error = document.querySelector('.card__error-msg');

const submitSwitch = () => {
	const card = document.querySelector('.card');
	const result = document.querySelector('.result');
	const text = result.querySelector('.result__info');
	const rate = card.querySelector('.card__circle--active');

	if (rate === null) {
		error.textContent = 'Please rate us!';
	} else {
		card.style.display = 'none';
		result.style.display = 'block';
		text.textContent = `You selected ${rate.innerText} out of 5`;
	}
};

allRates.forEach((rate) => {
	rate.addEventListener('click', () => {
		allRates.forEach((rate) => {
			rate.classList.remove('card__circle--active');
		});
		rate.classList.add('card__circle--active');
		error.textContent = '';
	});
});

submitBtn.addEventListener('click', submitSwitch);
