import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const  handleClick =() =>{

}
const ProviderCard = ({user}:{user:any}) => {
    const userInStore = useSelector((state: any) => state.user);
    // const dispatch = useDispatch();
    return (
        < div className="col-md-3 d-none d-md-block" style={{display:"flex"}}>
            <div className="card mb-2">
                <img className="card-img-top" src={user.catImage}/>
                <div className="card-body">
                    <h4 className="card-title" onClick={handleClick}>{user.catName}</h4>
                    {/* <p className="card-text">{user.catImage}</p> */}
                    <a className="btn btn-primary">Learn more</a>
                </div>
            </div>
        </div >
    );
}

export default ProviderCard;

