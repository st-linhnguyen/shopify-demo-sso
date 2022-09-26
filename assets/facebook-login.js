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

  checkLoginState();
}

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.addEventListener('DOMContentLoaded', () => {
  const buttonFB = document.getElementsByClassName('sso-login-facebook')[0];
  buttonFB.addEventListener('click', () => {
    checkLoginState(true);
  });
});
