import React from "react";

export const PopUpLogin: React.FC = () => {
  return (
    <div className="pop-up-login">
      <div className="bg-lock"></div>
      <form className="auth-login-form">
        <input type="text" name="login" placeholder="Введите email" />
        <input type="password" name="password" placeholder="Введите пароль" />
      </form>
    </div>
  );
};
