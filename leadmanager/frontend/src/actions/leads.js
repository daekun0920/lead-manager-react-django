import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import errors from '../reducers/errors';



import { GET_LEADS, DELETE_LEADS, ADD_LEAD, GET_ERRORS } from './types';

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
    axios
    .get('/api/leads/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE LEADS
export const deleteLeads = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteLead: "Lead Deleted"}))
        dispatch({
            type: DELETE_LEADS,
            payload: id
        });
    }).catch(err => console.log(err));
}

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
    axios.post('/api/leads/', lead, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addLead: "Lead Added"}))

        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

