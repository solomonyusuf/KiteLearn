import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Sidebar from './sidebar';


export default function Admincontact()  {
    const [result, setResult] = useState([]);
    const url = 'api/Contacts/';
    useEffect(() => {
        refreshList();
    }, [])
const refreshList = (url = 'api/Contacts') => {
    axios.get(url).then(
        res => {
            console.log(res);
            setResult(res.data)
        })
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
                        <div className="row" style={{ marginRight: '50px' }}>

                            <div className="col-md-12 jumbotron jumbotron-fluid py-4">
                                <h2 align="center"> Database Inbox</h2>
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
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{ color: "darkblue" }}><i><strong>{data.fullName}</strong></i></h5>
                                                    <p className="card-text">{data.email}</p>
                                                    <p className="card-text">{data.phoneNumber}</p>
                                                    <p className="card-text">{data.message}</p>
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
            </div>
        </div >
        
   
);
  }

