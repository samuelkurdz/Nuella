<template>
  <div class="account">
    <div class="account-page">
      <div class="container">
        <div class="row">
<!--          <div class="col-2">-->
<!--            <img src="@/assets/images/image1.png" alt="image" width="100%">-->
<!--          </div>-->
          <div class="col-2">
            <div class="form-container">
              <div class="form-btn">
                <span onclick="login()">Login</span>
                <span onclick="register()">Register</span>
                <hr id="indicator">
              </div>
              <form id="login-form">
                <input type="text" placeholder="User Name">
                <input type="password" placeholder="password">
                <button class="btn" type="submit">Login</button>
                <a href="#">Forgot Password</a>
              </form>
              <form id="registration-form">
                <input type="text" placeholder="User Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <button class="btn" type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* account page */
.account-page {
  //padding: 50px 0;
  background: radial-gradient(#fff, #ffd6d6);
  height: 100vh;
  display: flex;
}

.form-container {
  background: #fff;
  width: 300px;
  height: 400px;
  position: relative;
  text-align: center;
  padding: 20px 0;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.form-container span {
  font-weight: bold;
  padding: 0 10px;
  color: #555555;
  cursor: pointer;
  width: 100px;
  display: inline-block;
}

.form-btn {
  display: inline-block;
}

.form-container form {
  max-width: 300px;
  padding: 0 20px;
  position: absolute;
  top: 130px;
  transition: transform 0.8s;
}

form input {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc ;
}

form .btn {
  width: 100%;
  border: none;
  margin: 10px 0;
  cursor: pointer;
}

form .form-btn:focus {
  outline: none;
}

#login-form {
  left: -300px;
}

.registration-form {
  left: 0;
}

form a {
  font-size: 12px;
}

#indicator {
  width: 100px;
  border: none;
  background: #ff523b;
  height: 3px;
  margin-top: 8px;
  transform: translateX(100px);
  transition: transform 0.8s;
}
/* media query for less than 600 screen size */
//@media only screen and (min-width: 600px) {
//  .form-container {
//
//  }
//}
</style>
