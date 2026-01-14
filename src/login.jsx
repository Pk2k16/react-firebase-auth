import {useState} from "react";
import Input from "./input";

function Login() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState("");

const isFormValid = 
username.trim() !=="" &&
password.trim() !=='';
return (
    <div className="login-page">
        <div className="login-card">
            <h2 style={{ textAlign: "center"}}>
                {isFormValid ? 'welcome back' : 'Get Started'}
            </h2>
        <Input  
        type = 'text'
        placeholder = 'username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        <Input  
        type = 'password'
        placeholder = 'Password'
         value={password}
        onChange={e => setPassword(e.target.value)}
        />
        
      <button type='submit'>Login</button>
    </div>
    </div>
      );
}

export default Login;