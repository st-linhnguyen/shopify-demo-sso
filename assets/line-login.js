document.addEventListener('DOMContentLoaded', function() {
  const btnLine = document.getElementsByClassName('sso-login-line')[0];
  btnLine.addEventListener('click', () => {
    liff.init({
      liffId: '1657505755-gjVkWB4b'
    }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      console.log('Token: ', liff.getAccessToken());
      liff.getProfile().then(profile => {
        console.log('Profile: ', profile);
      }).catch(err => {
        console.log('Failed to get profile');
      })
    }).catch(err => {
      throw err;
    });
  });
});
