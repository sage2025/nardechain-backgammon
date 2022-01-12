import http from './http-common'

class authService {
    login(email, password) {
      return http
        .post("users/login", {
          email,
          password
        })
        .then(response => {
          console.log(response)
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
    logout() {
      localStorage.removeItem("user");
      window.location.reload();
      window.location.replace("https://nardechain.io/#/play");
    }
  
    register(account, membership, username, name, birth, email, gender, state, code, pass, repass) {
      var data = {
        account: account,
        membership: membership,
        username: username,
        name: name,
        birth: birth,
        email: email,
        gender: gender,
        state: state,
        code: code,
        password: pass,
        passwordconf: repass
      }
      return http.post("users/signup", data);
    }

    validateRegister(data) {
      return http.post("users/validateRegister", data);
    }
    
    forgotpassword(email) {
      const data = {
        email: email
      }
      return http.post("users/forgotpassword", data);
    }

    resetpassword(email, password, passowrd_conf, tokens) {
      var tmpString = window.location.href;
      var token = tmpString.substr(tmpString.lastIndexOf('/')+1, tmpString.length);  
    
      const data = {
        email: email,
        password: password,
        passwordconf: passowrd_conf,
        token: token
      }
      console.log(token, "token");
      return http.post("users/resetpassword", data);
    }

    getToken(email, token) {
      return http.get(`users/getToken/${email}/${token}`);
    }

    getCurrentUser(account) {
      // return JSON.parse(localStorage.getItem('user'));
      const data = {
        account: account
      }
      return http.get(`users/getCurUser/${account}`);
    }
  }
  
  export default new authService();
  