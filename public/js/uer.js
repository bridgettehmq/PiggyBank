const countEl = document.querySelector('#count');

function setCounterText(count) {
    countEl.textContent = count;
  }
/* make the button call the function */
const button = document.getElementById('theButton')
button.addEventListener('click', function() {
  steponup()
})

function steponup() {
  const input = document.getElementById('theNumber').value
  console.log(input)
  const val = document.getElementById('incrementer').value

  if (val) {  /* increment with a parameter */
    input.stepUp(val)
  } else {    /* or without a parameter. Try it with 0 */
    input.stepUp();
    count++;
  setCounterText(count);
  }
}

/* make the button call the function */
button.addEventListener('click', function() {
  stepondown();}
);

function stepondown() {
  const input = document.getElementById('theNumber');
  const val = document.getElementById('decrementer').value;

  if (val) {  /* increment with a parameter */
    input.stepDown(val);
  } else {    /* or without a parameter. Try it with 0, 5, -2, etc. */
    input.stepDown();
    setCounterText();
  }
}