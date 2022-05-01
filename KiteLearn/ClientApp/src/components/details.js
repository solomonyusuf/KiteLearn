import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Details(props) {
    const id = props.match.params.id;
    const [result, setResult] = useState([]);
    const url = 'api/Videos';
    useEffect(() => {
        refreshList();
    }, [])
    const refreshList = () => {
        axios.get(`${url}/${id}`).then(
            res => {
                console.log(res);
                setResult(res.data)
            })
    }


    return (
        <div>
            <div className="row">
                        
                      works
            </div>
        </div>
    );
}

