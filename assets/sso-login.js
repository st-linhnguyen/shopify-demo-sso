function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '833394284494920',
    cookie     : true,
    xfbml      : true,
    version    : 'v15.0'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
  buttonFB.addEventListener('click', () => {
    console.log(123123);
    checkLoginState();
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
//   buttonFB.addEventListener('click', () => {
//     console.log(123123);
//     checkLoginState();
//   });
// });
