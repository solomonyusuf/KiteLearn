import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Music() {

  
    const [result, setResult] = useState([]);
    
    const url = 'api/Videos/';
    useEffect(() => {
        refreshList();
    }, [])
    const refreshList = (url = 'api/Videos') => {
        axios.get(url).then(
            res => {
                console.log(res);
                setResult(res.data)
               
            })
    }



    const [search, Setsearch] = useState('');
    return (
        <div style={{ margin: '3px' }}>

            <div className="col">
                <div className="row">

                    <div className="col-md-12 jumbotron jumbotron-fluid py-3">
                        <h2 align="center"> Music Videos   </h2><p> </p>
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

                                    <div className="card" align="center" style={{ width: "300px", height: "400px" }}>
                                        <video className="shadow card-img-top" id="video"
                                            style={{ width: "294px", height: "300px" }}
                                            controls >
                                            <source  src={data.videoName}
                                                type="video/mp4" />
                                        </video>
                                        <div className="card-body">

                                            <h5 className="card-title" style={{ color: "darkblue" }}>{data.name}</h5>
                                            <p className="card-text">{data.actor}</p>
                                            

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
    );
}

