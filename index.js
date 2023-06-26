const { stringifyRequest } = require("nock/lib/common");

// Add your code here
function submitData(name, email) {
    const userData = {
      name:'Steve',
      email: 'steve@steve.com'
    };
  
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>${id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  
console.log(submitData())