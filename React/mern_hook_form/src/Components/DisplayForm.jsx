import React from 'react'

function DisplayForm(props) {
    // console.log("In DisplayForm",JSON.stringify(props.user)) ;
  return (
    <div>
        <h2>Submitted Form Details</h2>
        <p>UserName: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>Password: {props.user.password}</p>
        <p>Confirm: {props.user.confirm}</p>
    </div>
  )
}

export default DisplayForm