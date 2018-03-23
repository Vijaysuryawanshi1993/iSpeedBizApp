import {SEARCH_CHANGE, GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED} from './Types'
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export const searchChanged = (text) => {
    return {
        type: SEARCH_CHANGE,
        payload: text
    };
};

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
};

const getDataFailed = () => {
    return {
        type: GET_DATA_FAILED
    }
};

export const gettingData = ({searchText}) => {
    return (
        axios.get('http://www.mca.gov.in/mcafoportal/', {
            params: {
                'companyname': searchText,
            }
        }).then(function (response) {
            alert(JSON.stringify(response));
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    );
};
