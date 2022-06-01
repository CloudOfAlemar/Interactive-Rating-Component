
const componentBaseRating = document.querySelector('.component-base-rating');
const componentBaseThankYou = document.querySelector('.component-base-thank-you');

const radioInputs = document.querySelectorAll('.radio-input');
const submitButton = document.querySelector('.submit-button');
const ratingDisplayValue = document.querySelector('.rating-display-value');

let ratingValue = 0;
for(let i = 0; i < radioInputs.length; i++) {
  radioInputs[i].addEventListener('click', (e) => {
    ratingValue = parseInt(e.target.value);
  });
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(ratingValue > 0) {
    componentBaseRating.classList.add('hide');
    ratingDisplayValue.textContent = ratingValue;
    componentBaseThankYou.classList.remove('hide');
    componentBaseThankYou.classList.add('ascend');
  }
});