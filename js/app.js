$(".form-signin").on('submit', function(){
  var emailNode = $('input[type=email]');
  var passwordNode = $('input[type=password]');
  var email = emailNode.val().trim()
  var password = passwordNode.val().trim()
  var autoLogin = $('.auto-login input').prop('checked')

  var emailPattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  if(email === ''){
    showError('用户名不能为空')
    return false
  }
  if(!emailPattern.test(email)){
    showError('邮箱格式不正确')
    return false
  }
  if(password === ''){
    showError('密码不能为空')
    return false
  }

  alert(email + "\n" + password+ "\n" + autoLogin)
  return true
});

$(".form-change").on('submit', function(){
  var oldPassword = $('input[type=password]').eq(0).val().trim();
  var password = $('input[type=password]').eq(1).val().trim();
  var passwordAgain = $('input[type=password]').eq(2).val().trim();

  if(oldPassword === ''){
    showError('旧密码不能为空')
    return false
  }
  if(password === '' || passwordAgain === ''){
    showError('新密码不能为空')
    return false
  }
  if(password !== passwordAgain){
    showError('两次新密码不匹配，请重新输入')
    return false
  }
  

  alert(oldPassword + "\n" + password+ "\n" + passwordAgain)
  return true
});

$(".form-reset").on('submit', function(){
  var email = $('input[type=email]').val().trim();

  var emailPattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  if(email === ''){
    showError('Email不能为空')
    return false
  }
  if(!emailPattern.test(email)){
    showError('邮箱格式不正确')
    return false
  }  

  alert(email)
  return true
});




function showError(msg) {
  $('#error-message').html(msg).show()
}