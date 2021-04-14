import React, { useState } from 'react';
import NavBarMenu from '../NavBarMenu';

const UsertCreate = () => {

    const [name,setName] = useState('');
    const [username,setUserName] = useState('');
    const [email,setMail] = useState('');

    const create = async () => {
        //console.warn(this.state)
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                name:name,
                username:username,
                email:email
            })
        }).then((result)=>{
            result.json().then((res)=>{
                //console.warn(res)
                // let putT = [
                //     '{\n'+
                //     'id:'+res.id+'\n'+
                //     'first_name:'+ res.first_name +'\n'+
                //     'last_name:'+ res.last_name +'\n'+
                //     'email:'+ res.email +'\n'+
                //     'createdAt:'+ res.createdAt +'\n'+
                //     '}'
                // ]
                alert("User Added \n")
            })
        })
    }

    const handelUserinputName = (event) => {
        setName(event.target.value);
    };
    const handelUserinputUserName = event => {
        setUserName(event.target.value);
    };
    const handelUserinputMail = (event) => {
        setMail(event.target.value);
    };
    
        return (
            <div>
                <NavBarMenu/>
                <h1>userCreate</h1>
                <div>
                    <input onChange={handelUserinputName} placeholder='First Name' /> <br/> <br />
                    <input onChange={handelUserinputUserName} placeholder='Last Name' /> <br/> <br />
                    <input onChange={handelUserinputMail} placeholder='Email' /> <br/> <br />

                    <button onClick={() => { create() }}>Add User</button>
                </div>
            </div>
        );
    }

export default UsertCreate;