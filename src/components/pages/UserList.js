import React from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavBarMenu from '../NavBarMenu';
import {useState, useEffect} from 'react'

const UserList = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
      getList();
    },[]);
    const getList = async () => {
        try
        {
            const response = await fetch("http://localhost:3000/users");
            const result = await response.json();
                //console.warn(result.data)
                setList(result);
                //console.warn(list);
        } catch(err){
            console.log(err);
        }
    }
    const deleteItem =(id)=>{
        try
        {
            fetch('http://localhost:3000/users/'+id,{
            method: 'DELETE',}).then((res)=>{
            //result.json().then((res)=>{
               // console.warn(res)
                alert("User Deleted\n Response Status: "+res.status);
                getList()
            })
        }
        catch (err)
        {
            console.log(err);
        }
        
    }
        //console.warn(this.state)
        return (
            <div>
                <NavBarMenu />
                <h1>userList</h1>
                {
                    list?
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>userame</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                        {list && list.map((item)=>
                        // <div key={item.id} className="list-wrapper">
                        // <span >{item.first_name}</span>
                        // <span >{item.last_name}</span>
                        // <span >{item.email}</span>
                        // </div>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><Link to={'/update/'+item.id}>Edit | </Link>
                            <span onClick={()=> deleteItem(item.id)}>Delete</span></td>
                            
                        </tr>
                        )}
                         </tbody>
                        </Table>
                    :<p>Loading...</p>
                }
            </div>
        );
    }

export default UserList;