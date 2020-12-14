import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProviderCard from "./Provider-card";
const ProviderContainer = () => {
    const dispatch = useDispatch();
    const userInStore = useSelector((state: any) => state.prov)
    // const serializedState:any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 

    console.log("store ===> ",userInStore)
    return (
        <div className="list">
           {userInStore.map((prov: any, index: number) =>
                <ProviderCard
                    key={index}
                    prov={prov}
                />
            )}
        </div>
    );
}

export default ProviderContainer;