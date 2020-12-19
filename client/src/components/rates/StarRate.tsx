import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRate.css';

// import useAxios from 'axios-hooks'

const axios = require('axios');

const StarRating = () => {
    const [rating, setRating] = useState<any | null>(null);
    const [hover, setHover] = useState<any | null>(null);

    // const [{ data, loading, error, response }, refetch] = useAxios({
    //     method: 'POST',
    //     url: `http://localhost:8000/reviews/`,
    // });
    // console.log("hello");
    // const [text, setText] = useState('');

    // useEffect(() => {
    //     if (data && data.ad && data.ad.rates) {
    //         setText(data.ad.rates);
    //     } else if (error) {
    //         setText(error.message);
    //     }
    // }, [data, error]);



    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                        {/* {loading && <p>loading</p>} */}
                    </label>
                );
            })}
            <p>The rating is {rating}.</p>
        </div>
    );
}


export default StarRating;