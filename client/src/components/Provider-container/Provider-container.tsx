import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProviderCard from "./Provider-card";

const ProviderContainer = ({ results, city, category }: any) => {
    // const dispatch = useDispatch();
    // const userInStore = useSelector((state: any) => state.prov)
    // const serializedState:any = localStorage.getItem("state");
    // const userInStore = JSON.parse(serializedState) 

    // console.log("store ===> ",userInStore)
    const [allprov, setAllprov] = useState([]);
    const [reqprov, setReqprov] = useState([]);
    console.log("hi", setAllprov)

    return (
        <div className="list">
            {/* {reqprov.map((prov: any, index: number) =>
                <ProviderCard
                    key={index}
                    prov={prov}
                />
            )} */}
        </div>
    );
}

export default ProviderContainer;