document.forms.form.onsubmit = function () {
    
  var login = this.login.value;
  console.log(`login: ${login}`);

  var email = this.email.value;
  console.log(`E-mail: ${email}`);

  var password = this.password.value;
  console.log(`Password: ${password}`);

  return false;
};
