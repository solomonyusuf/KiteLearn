import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

export default function Adminnews() {

    const [result, setResult] = useState([]);
    const url = 'api/News/';
    useEffect(() => {
        refreshList();
    }, [])
    const refreshList = (url= 'api/News') => {
        axios.get(url).then(
            res =>{
                console.log(res);
                setResult(res.data)
            })
    }
    const editvideo = (id) => {
        return 'editnews/' + `${id}`;
    }
   
    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            axios.delete(url + id)
                .then(res => refreshList())
                .catch(err => console.log(err))
    }


   

    const [search, Setsearch] = useState('');
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div >
                <div className="col">
                    <div className="row">
                        <div class="col">
                            <div className="row" style={{marginRight:'50px'}}>

                                <div className="col-md-12 jumbotron jumbotron-fluid py-4">
                                    <h2 align="center"> Database News  <NavLink className="btn btn-outline-primary" tag={Link} to="/addnews">New News</NavLink ></h2>
                                </div>
                                <div className="col-md-12 " align="center">
                                    <input onChange={(event) => { Setsearch(event.target.value); }} type="text" className="form-control" name="search" placeholder="  Search by Date...." />
                                </div>
                                {result.filter((val) => {
                                    if (search == "") {
                                        return val
                                    } else if (val.timeStamp.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                }).map((data, key) => {
                                    return (
                                        <div className="col">
                                            <div className="col-md-4 col-sm-4">
                                                <br />
                                                <div className="card" align="center" style={{ width: "300px" }}>
                                                    <img src={data.imgPath} className="card-img-top" style={{ height: "300px",width:"100%" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title" style={{ color: "darkblue", fontStyle:'italics' }}>{data.title}</h5>
                                                        <p className="card-text">{data.body}</p>
                                                        <NavLink to={editvideo(data.id)} className="btn btn-primary">Edit</NavLink>
                                                        <button onClick={e => onDelete(e, (data.id))} className="btn btn-danger">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        
      </div>
    );
            }