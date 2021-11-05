// Validate user input and send login request
const handleSignupSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  

    if (!username || !password) {
      alert('You must provide a username and password.');
      return;
    }


    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      alert('Failed to sign up.');
      return;
    }

    // go to home page
    window.location.replace('/');
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', handleSignupSubmit);
