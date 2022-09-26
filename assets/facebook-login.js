
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

(function() {
  var e = document.createElement('script');
  e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());

document.addEventListener('DOMContentLoaded', () => {
  const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
  buttonFB.addEventListener('click', () => {
    checkLoginState();
  });
});
