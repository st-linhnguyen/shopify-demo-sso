var fbApiInit = false;

function statusChangeCallback(response) {
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
    console.log(response);
  });
}

function checkLoginState(isClicked = false) {
  FB.getLoginStatus(function(response) {
    if (isClicked) {
      statusChangeCallback(response);
    } else {
      this.fbApiInit = true;
    }
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '833394284494920',
    cookie: true,
    xfbml: true,
    version: 'v15.0'
  });

  console.log(123123123123);

  checkLoginState();
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
  buttonFB.addEventListener('click', () => {
    checkLoginState(true);
  });
});
