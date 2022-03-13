import React, {useState} from 'react'
import DisplayForm from './DisplayForm';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function MoreForms2() {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm, setConfirm] = useState("");

    const [newUser,setNewUser] = useState({});

    const [user, setUser] = useState({
        username: "",
        email:"",
        password: "",
        confirm:"",
        errors:{
            username: "",
            email:"",
            password: "",
            confirm:"",
        }
    })
    
    const handleClick=(e) =>{
        const tagName= e.target.name;
        const tagValue= e.target.value;
        const errors=user.errors;
        switch(tagName){
            case 'username':
                //const tagValue= e.target.value;
                if(tagValue.length < 1){
                    errors.username = "UserName is required";
                    
                }else if(tagValue.length < 4){
                    errors.username = "UserName must be 3 characters or longer!";
                }else{
                    errors.username ="";
                }
                break;
            case 'email':
                //const tagValue= e.target.value;
                if(tagValue.length < 1){
                    errors.email = "Email is required"
                }else if(tagValue.length < 4){
                    errors.email = "Email must be 3 characters or longer!"
                }else if(!validEmailRegex.test(tagValue)){
                    errors.email="Email is not valid"
                }else{
                    errors.email =""
                }
                break;
            case 'password':
                //const tagValue= e.target.value;
                if(tagValue.length < 1){
                    errors.password = "Password is required"
                }else if(tagValue.length < 8){
                    errors.password = "Password must be 8 characters or longer!"
                }else{
                    errors.password =""
                }
                break;
            case 'confirm':
                if(tagValue.length < 1){
                    errors.confirm = "UserName is required"
                }else if(tagValue.length < 8){
                    errors.confirm = "UserName must be 8 characters or longer!"
                }else{
                    errors.confirm =""
                }
                break;
        }
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            [e.target.errors]: errors
        })
        console.log("Errors After updating Are: ", user.errors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewUser(user);
        console.log("Welcome", newUser);
    };
    
    return (
    <div>
        <form onSubmit={(e) =>handleSubmit(e)}>
            <h1>More Forms with one On Change Handle Function </h1>
            <div className='m-3'>
                <label>Username: </label> 
                <input type="text" name="username" onChange={(e) => handleClick(e)} value={user.username} />
                {
                    user.errors.username ?
                    <p style={{color:'red'}}>{ user.errors.username }</p> :''
                }
            </div>
            <div className='m-3'>
                <label>Email Address: </label> 
                <input type="text"  name="email" onChange={ (e) => handleClick(e)} value={user.email}/>
                {
                    user.errors.email ?
                    <p style={{color:'red'}}>{ user.errors.email }</p> :''
                }
            </div>
            <div className='m-3'>
                <label>Password: </label>
                <input type="text" name="password" onChange={ (e) => handleClick(e)}  value={user.password}/>
                {
                    user.errors.password ?
                    <p style={{color:'red'}}>{ user.errors.password }</p> :''
                }
            </div>
            <div className='m-3'>
                <label>Confirm: </label>
                <input type="text" name="confirm" onChange={ (e) => handleClick(e)} value={user.confirm} />
                {
                    user.errors.confirm ?
                    <p style={{color:'red'}}>{ user.errors.confirm }</p> :''
                }
            </div>
            <input className='m-3' type="submit" value="Create User" />
        </form>
        <DisplayForm user={newUser}/>
    </div>
    )
}

export default MoreForms2