import React, { useState } from 'react';
import anime from 'animejs';

const Login = () => {
  const [animation, setAnimation] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(false);

  const handleFocus = (offsetValue, arrayValue) => {
    if (animation) animation.pause();
    setAnimation(
      anime({
        targets: 'path',
        strokeDashoffset: {
          value: offsetValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: arrayValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
      })
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email === '' && password === '') {
      setErrorText('Please fill all the fields! ');
      setShowError(true);
    } else if (!email.includes('@')) {
      setErrorText("Invalid Email! Please add '@' ");
      setShowError(true);
    } else if (password.length < 4) {
      setErrorText('Password is too short!');
      setShowError(true);
    } else {
      console.log('Sending request...');
      setShowError(false);
      setErrorText('');
    }
  };

  const emailHandler = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };

  const passwordHandler = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you didn't bother to read
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                inkscape="collect"
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse">
                <stop style={{ stopColor: '#ff00ff' }} offset="0" id="stop876" />
                <stop style={{ stopColor: '#ff0000' }} offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <form className="form" onSubmit={formSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onFocus={() => handleFocus(0, '240 1386')} onChange={emailHandler} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onFocus={() => handleFocus(-336, '240 1386')}
              onChange={passwordHandler}
            />
            <p className="m-t-5 m-b-5 .text-danger">{showError && errorText}</p>
            <input type="submit" id="submit" value="Submit" onFocus={() => handleFocus(-730, '530 1386')} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
