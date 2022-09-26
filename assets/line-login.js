// https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz

document.addEventListener('DOMContentLoaded', function() {
  $.get('CSRFTokenManager.do', function(data) {
    var send = XMLHttpRequest.prototype.send,
    token =data;
    console.log(data);
    // document.cookie='X-CSRF-Token='+token;
    // XMLHttpRequest.prototype.send = function(data) {
    //     this.setRequestHeader('X-CSRF-Token',token);
    //     //dojo.cookie("X-CSRF-Token", "");

    //     return send.apply(this, arguments);
    // };
 });
  // const buttonLine = document.getElementsByClassName('sso-login-line')[0];
  // buttonLine.addEventListener('click', function() {
  //   location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657504427&redirect_uri=https://demo-sso.myshopify.com/account/login&scope=profile%20openid';
  // });
});
