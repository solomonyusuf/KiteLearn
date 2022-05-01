import React, { } from 'react';
import  Uploadvideo  from '../uploads/uploadvideo';
import  Uploadimg  from '../uploads/uploadimg';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

export default function Adminhome() {


 
    return (
      <div>
  
  <div className="row">
    <div className="col-3">
    <Sidebar />
    </div >
        <div className="col">
                    <div className="row card" style={{ marginRight: '50px' }}>
                        <div class="col card-body"  >
                            
                    <h4>Server Random uploads</h4>
                <div className="form-group">
                        <label>Video</label>
                        <Uploadvideo/>
                    </div>

                <div className="form-group">
                        <label>image</label>
                        <Uploadimg/>
                    </div>
                </div>
            </div>
        </div>
    </div >


      </div>
    );
}
