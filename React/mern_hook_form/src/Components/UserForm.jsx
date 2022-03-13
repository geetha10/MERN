import React,{useState} from 'react'
import DisplayForm from './DisplayForm';

const UserForm = (props) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");

    const [newUser,setNewUser] = useState({});
    
    const createUser = (e) => {
        e.preventDefault();
        setNewUser({username, email, password,confirm})
        setUsername("");
        setEmail("");
        setPassword("")
        setConfirm("")
        console.log("Welcome", JSON.stringify(newUser));
    };

    return (
        <div>
            <form onSubmit={ createUser}>
                <h1>Hook Form Assignment</h1>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>

                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value)} value={confirm}/>
                </div>
                <input type="submit" value="Create User" />
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

export default UserForm
