import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';


export default function Adminvideo  () {
    const [result, setResult] = useState([]);
    const url = 'api/Videos/';
    useEffect(() => {
        refreshList();
    }, [])
    const refreshList = (url= 'api/Videos') => {
        axios.get(url).then(
            res =>{
                console.log(res);
                setResult(res.data)
            })
    }
    const editvideo = (id) => {
        return 'editvideo/' + `${id}`;
    }
    const details = (id) => {
        return 'details/' + `${id}`;
    }
    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            axios.delete(url + id)
                .then(res => refreshList())
                .catch(err => console.log(err))
    }

    const read=(res)=>{
     return `/${res}`
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
                            <div className="row" style={{ marginRight: '50px' }}>

                                <div className="col-md-12 jumbotron jumbotron-fluid py-3">
                                    <h2 align="center"> Database Videos  <NavLink className="btn btn-outline-primary" tag={Link} to="/addvideo">New Video</NavLink > </h2><p> </p>
                                </div>
                                <div className="col-md-12 " align="center">
                                    <input onChange={(event) => { Setsearch(event.target.value); }} type="text" className="form-control" name="search" placeholder="  Search by Name...." />
                                </div>
                                {result.filter((val) => {
                                    if (search == "") {
                                        return val
                                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                }).map((data, key) => {
                                    return (
                                        <div className="col">
                                            <div className="col-md-4 col-sm-4">
                                                <br />
                                               <div className="card" align="center" style={{ width: "300px"}}>
                                                    <video className="shadow card-img-top" id="video"
                                                        style={{ width: "297px", height: "300px" }}
                                                        controls >
                                                        <source src={data.videoName}
                                                            type="video/mp4" />
                                                    </video>
                                                    <div className="card-body">
                                                        <h5 className="card-title" style={{ color: "darkblue" }}>{data.name}</h5>
                                                        <p className="card-text">{data.actor}</p>
                                                        <p className="card-text">{data.description}</p>
                                                        <NavLink to={editvideo(data.id)} className="btn btn-primary"  >Edit</NavLink>
                                                        <a className="btn btn-info" href={read(data.videoName)} >Watch</a>
                                                        <button onClick={e => onDelete(e, (data.id))} className="btn btn-danger" >Delete</button>
                                                    </div>
                                                </div>
                                                
                                                <br />
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

