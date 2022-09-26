function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {
    FB.login(function(response) {
      console.log(response);
    }, {scope: 'public_profile,email'});
  }
}

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
  });
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '833394284494920',
    cookie: true,
    xfbml: true,
    version: 'v15.0'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
  buttonFB.addEventListener('click', () => {
    checkLoginState();
  });
});
