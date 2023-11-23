let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  const body = document.body;
  const Element = document.getElementById("footer");
  // Check the current mode
  const isDarkMode = body.classList.contains('dark-mode');

  // Toggle between dark and light mode
  if (isDarkMode) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    Element.classList.remove('dark-element'); // Remove dark-specific class if needed
  } else {
    // Switch to dark mode
    body.classList.add('dark-mode');
    Element.classList.add('dark-element'); // Add dark-specific class if needed
  }

}

themeButton.addEventListener("click", toggleDarkMode);


let count = 3;
// Add your query for the sign now button here
const signNowButton = document.getElementById('sign-now-button');

const addSignature = () => {
  // Get the user's name and hometown from the form inputs
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');

  const name = nameInput.value;
  const hometown = hometownInput.value;
  const email = emailInput.value;

  // Create a new paragraph element for the signature
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${name} from ${hometown} supports this!`;

  // Find the signatures section and append the new signature
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  // Remove the old counter
  const oldCounter = document.getElementById('counter');
  oldCounter.remove();

  // Update the count variable
  count = count + 1;

  // Create a new counter HTML p tag and set the id to "counter"
  const newCounter = document.createElement('p');
  newCounter.id = 'counter';

  // Set the text content of the new counter element
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  // Append the new counter to the signatures section
  signaturesSection.appendChild(newCounter);

  // Clear the form inputs after adding the signature
  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
}


const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  const email = document.getElementById('email');
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 3) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
    if (!email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
    }
    else {
      email.classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = '';
      containsErrors = false;
    }
  }


}
signNowButton.addEventListener('click', validateForm);


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}

const revealableContainers = document.querySelectorAll('.revealable');
function reveal() {
  // Loop through each revealable container
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('resize', reveal);

window.addEventListener('load', reveal);
