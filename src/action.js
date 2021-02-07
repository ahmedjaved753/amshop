import React from "react";
import {
    COUNTRY_DROPDOWN_CHANGE
} from './types';

export const countryDropDownChange = (keyValue) => async dispatch => {
    const APP_ID = 'yRG-iOe_CgmR5je_oMeU901kifirnqjYX6JQdAUDNkM';
    fetch('https://api.unsplash.com/photos/?client_id=' + APP_ID)
        .then(res => res.json())
        .then(data => {
            // this.setState({
            //     imagesArray: data,
            //     showComponent: true,
            // });
            dispatch({
                type: COUNTRY_DROPDOWN_CHANGE,
                payload: data
            })
        })
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    
    
  }