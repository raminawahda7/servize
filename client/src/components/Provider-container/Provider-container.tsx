import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import ProviderCard from "../Provider-card/Provider-card";
const ProviderContainer = () => {
    const dispatch = useDispatch();
    const userInStore = useSelector((state: any) => state.user);
    // console.log(userInStore)
    return ( 
        <div className="list">
            {userInStore.map((user:any, index:number) =>
                <ProviderCard
                    key={index}
                    user={user}
                />
            )}
        </div>
     );
}
 
export default ProviderContainer;