import React,{useState} from 'react'
import DisplayForm from './DisplayForm';

const MoreForms = (props) => {

    const [username, setUsername] = useState("");
    const [userNameError, setUsernameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  

    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState(""); 

    const [newUser,setNewUser] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        setNewUser({username, email, password,confirm})
        console.log("Welcome", JSON.stringify(newUser));
    };

    const handleUserName =(e)=>{
        console.log(e, e.target.name)
        setUsername(e.target.value);
        if(e.target.value.length <1){
            setUsernameError("UserName is required");
        }else if(e.target.value.length <3){
            setUsernameError("UserName must be 3 characters or longer!");
        }
        else{
            setUsernameError("");
        }
    }

    const handleEmail =(e)=>{
        console.log(e, e.target.name)
        setEmail(e.target.value);
        if(e.target.value.length <1){
            setEmailError("Email is required")
        }else if(e.target.value.length <6){
            setEmailError("Email must be 6 characters or longer!")
        }else{
            setEmailError("");
        }
    }

    const handlePassword =(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length <1){
            setPasswordError("Password is required")
        }else if(e.target.value.length <8){
            setPasswordError("Password must be 8 characters or longer!");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirm =(e)=>{
        setConfirm(e.target.value);
        if(e.target.value.length <1){
            setConfirmError("Confirm is required")
        }else if(e.target.value.length <8){
            setConfirmError("Confirm must be 8 characters or longer!")
        }else{
            setConfirmError("");
        }
    }
    
    return (
        <div>
            <form onSubmit={createUser}>
                <h1>More Forms Assignment</h1>
                <div className="mt-3">
                    <label>Username: </label> 
                    <input type="text" name="username" onChange={handleUserName} />
                    {
                        userNameError ?
                        <p style={{color:'red'}}>{ userNameError }</p> :''
                    }
                </div>
                <div className="mt-3">
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={ handleEmail}  />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :''
                    }
                </div>
                <div className="mt-3">
                    <label>Password: </label>
                    <input type="text" name="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :''
                    }
                </div>
                <div className="mt-3">
                    <label>Confirm: </label>
                    <input type="text" name="confirm" onChange={ handleConfirm} />
                    {
                        confirmError ?
                        <p style={{color:'red'}}>{ confirmError }</p> :''
                    }
                </div>
                <input className="mt-3" type="submit" value="Create User" />
            </form>
            <div>
                <h2>RealTime Form Details</h2>
                <p>UserName: {username}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm: {confirm}</p>
            </div>
            <DisplayForm user={newUser}/>
        </div>
    );
}

export default MoreForms
