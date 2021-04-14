import React, { Component } from 'react';
import { Table,Form } from 'react-bootstrap'
import {
    Link
  } from 'react-router-dom'
import NavBarMenu from '../NavBarMenu'

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
            lastSearch:"",
        }
    }
    search(key) {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/users?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
            })
        })
    }
    delete(id)
    {
        fetch('http://localhost:3000/users/'+id,
        {
            method: "DELETE",
            // headers:{
            //     'Content-Type':'application/json'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("User has heen Delete")
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
           <>
                <NavBarMenu />
                <h1>User Search</h1>
               
                <Form.Control type="text"  onChange={(event) => this.search(event.target.value)}   placeholder="Search User" />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
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
                            {
                                this.state.searchData.map((item)=>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={'/update/'+item.id}>Edit | </Link>
                                    <span onClick={()=> delete(item.id)}>Delete</span></td>
                            
                                </tr>
                                )
                            }
                            </tbody>
                            </Table>
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>:null
                    } 
                </div>
                    </>
        );
    }
}

export default RestaurantSearch;