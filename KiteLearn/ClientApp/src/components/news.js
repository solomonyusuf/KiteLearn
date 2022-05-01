import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function News() {

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
   


   

    const [search, Setsearch] = useState('');
    return (
        <div>
            <div className="container" >
               
                <div className="col">
                    <div className="row">
                        <div class="col">
                            <div className="row">

                                <div className="col-md-12 jumbotron jumbotron-fluid py-4">
                                    <h2 align="center"> Latest News </h2>
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