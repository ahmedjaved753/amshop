import React from 'react'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import './card.css'

function Card(props) {
    return (
        <div className="card-container">
            <img className="card-img" src={props.src} alt="" />
            {/* eslint-disable-next-line */}
            <a href="#"></a>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={props.value} readOnly />
                </Box>
            </div>
            <div className="price">
                <b>$25.99</b>
            </div>
        </div>
    )
}

export default Card
