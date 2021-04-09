import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class UserUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:' ',
            username:' ',
            email:' ',
        }

    }
    componentDidMount(){
        fetch('http://localhost:3000/users/'+this.props.match.params.id).then((response) => {
            response.json().then((result)=>{
                //console.warn(result)
                //this.setState({list:result.data})
                this.setState({name:result.name,
                    username:result.username,
                    email:result.email,
                    id:result.id,
                })
            })
        })
    }
    update(){
        fetch('http://localhost:3000/users/'+this.state.id,{
            method: 'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                //console.warn(res)
                let putT = [
                    '{\n'+
                    'id:'+res.id+'\n'+
                    'first_name:'+ res.name +'\n'+
                    'last_name:'+ res.username +'\n'+
                    'email:'+ res.email +'\n'+
                    'updatedAt:'+ res.updatedAt +'\n'+
                    '}'
                ]
                alert("User Updated \n Response:\n"+putT)
            })
        })
    }
    render() {
        //console.warn(this.props.match.params.id)
        return (
            <div>
                <NavBarMenu/>
                <h1>UserUpdate</h1>
                <div>
                    <input onChange={(event)=>{
                        this.setState({name: event.target.value})
                    }} placeholder='First Name' value={this.state.name} /> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({username: event.target.value})
                    }} placeholder='Last Name' value={this.state.username}/> <br/> <br />
                    <input onChange={(event)=>{
                        this.setState({email: event.target.value})
                    }} placeholder='Email' value={this.state.email}/> <br/> <br />

                    <button onClick={() => { this.update() }}>Update User</button>
                </div>
            </div>
        );
    }
}

export default UserUpdate;