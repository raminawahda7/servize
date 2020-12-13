import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProviderCard from "../Provider-card/Provider-card";
const ProviderContainer = () => {
    // const dispatch = useDispatch();
    // const userInStore = useSelector((state: any) => state.user)
    const serializedState:any = localStorage.getItem("state");
    const userInStore = JSON.parse(serializedState) 

    // console.log("store ===> ",userInStore)
    return (
        <div className="list">
           {/* {userInStore.user.map((user: any, index: number) =>
                <ProviderCard
                    key={index}
                    user={user}
                />
            )} */}
        </div>
    );
}

export default ProviderContainer;