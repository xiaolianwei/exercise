function  isLogin(){
    return document.cookie.includes('login=true');
}

function login() {
    const expiresDay = 1;
    const data = new Date();
    data.setTime(data.getTime() + expiresDay * 24 * 60 * 60 * 1000);
    document.cookie = `login=true;expiresDay=${data.toISOString()}`;
}

function cancelLogin () {
    const date = new Date();
    date.setTime(date.getTime() - 100000000);
    document.cookie = `login=true;expires=${date.toGMTString()}`;
  }

export default {
    isLogin,
    login,
    cancelLogin
}