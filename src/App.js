import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
// const Instagram = require('instagram-web-api')
// import Instagram from "instagram-web-api";
// import { InstagramLogin } from "@amraneze/react-instagram-login";
import facebookLogin from 'facebook-login';
import InstagramLogin from "react-instagram-oauth";

// const { username, password } = process.env
 
 function App() {
  const api = facebookLogin({ appId: '1069116127701174' });
 
// to trigger the login flow
 const loginFce = ()=>{
  api.login().then((response) => console.log(response));
 }
 const authHandler = (err, data) => {
  console.log(err, data);
};
// to check if the user is connected
// api.getLoginStatus().then((response) => console.log(response));
 useEffect(()=>{
  console.log(window.location.href)
 },[])
// // to indicate when the SDK is done loading
// api.whenLoaded().then(() => console.log('loaded!'));

  return (
   
      <>
      <button onClick={loginFce}> Login with facebook</button>
      <InstagramLogin
      authCallback={authHandler}
      appId="293869846911444"
      appSecret="49df1544fe8c6be07afdb43036ba6ebe"
      redirectUri="https://main--tourmaline-sunshine-1bee4d.netlify.app/"
    />
    </>

  );
}

export default App;
