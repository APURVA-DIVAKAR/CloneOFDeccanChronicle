import Axios from 'axios';
import axios from 'axios';
import * as _ from './ActionTypes'

const getDataRequest =(payload)=>{
    return {
        type: _.GET_DATA_REQUEST,
        payload
    }
}
const getDataError =(payload)=>{
    return {
        type: _.GET_DATA_ERROR,
        payload
    }
}
const getDataSuccess =(payload)=>{
    return {
        type: _.GET_DATA_SUCCESS,
        payload
    }
}
export const getData=()=>{
    return(dispatch)=>{
        dispatch(getDataRequest());
        Axios.get('/news')
        .then(r=>dispatch(getDataSuccess(r.data)))
        .catch(e=>dispatch(getDataError(e.data)))
    }
}

const getBusinessRequest =(payload)=>{
    return {
        type: _.GET_BUSINESS_REQUEST,
        payload
    }
}
const getBusinessError =(payload)=>{
    return {
        type: _.GET_BUSINESS_ERROR,
        payload
    }
}
const getBusinessSuccess =(payload)=>{
    return {
        type: _.GET_BUSINESS_SUCCESS,
        payload
    }
}
export const getBusiness=()=>{
    return(dispatch)=>{
        dispatch(getBusinessRequest());
        Axios.get('/buisness')
        .then(r=>dispatch(getBusinessSuccess(r.data)))
        .catch(e=>dispatch(getBusinessError(e.data)))
    }
}

const getScienceRequest =(payload)=>{
    return {
        type: _.GET_SCIENCE_REQUEST,
        payload
    }
}
const getScienceError =(payload)=>{
    return {
        type: _.GET_SCIENCE_ERROR,
        payload
    }
}
const getScienceSuccess =(payload)=>{
    return {
        type: _.GET_SCIENCE_SUCCESS,
        payload
    }
}
export const getScience=()=>{
    return(dispatch)=>{
        dispatch(getScienceRequest());
        Axios.get('/science')
        .then(r=>dispatch(getScienceSuccess(r.data)))
        .catch(e=>dispatch(getScienceError(e.data)))
    }
}

const getSportsRequest =(payload)=>{
    return {
        type: _.GET_SPORTS_REQUEST,
        payload
    }
}
const getSportsError =(payload)=>{
    return {
        type: _.GET_SPORTS_ERROR,
        payload
    }
}
const getSportsSuccess =(payload)=>{
    return {
        type: _.GET_SPORTS_SUCCESS,
        payload
    }
}
export const getSports=()=>{
    return(dispatch)=>{
        dispatch(getSportsRequest());
        Axios.get('sports')
        .then(r=>dispatch(getSportsSuccess(r.data)))
        .catch(e=>dispatch(getSportsError(e.data)))
    }
}

const getTechRequest =(payload)=>{
    return {
        type: _.GET_TECH_REQUEST,
        payload
    }
}
const getTechError =(payload)=>{
    return {
        type: _.GET_TECH_ERROR,
        payload
    }
}
const getTechSuccess =(payload)=>{
    return {
        type: _.GET_TECH_SUCCESS,
        payload
    }
}
export const getTech=()=>{
    return(dispatch)=>{
        dispatch(getTechRequest());
        Axios.get('/tech')
        .then(r=>dispatch(getTechSuccess(r.data)))
        .catch(e=>dispatch(getTechError(e.data)))
    }
}

const getEntertainmentRequest =(payload)=>{
    return {
        type: _.GET_ENTERTAINMENT_REQUEST,
        payload
    }
}
const getEntertainmentError =(payload)=>{
    return {
        type: _.GET_ENTERTAINMENT_ERROR,
        payload
    }
}
const getEntertainmentSuccess =(payload)=>{
    return {
        type: _.GET_ENTERTAINMENT_SUCCESS,
        payload
    }
}
export const getEntertainment=()=>{
    return(dispatch)=>{
        dispatch(getEntertainmentRequest());
        Axios.get('/entertainment')
        .then(r=>dispatch(getEntertainmentSuccess(r.data)))
        .catch(e=>dispatch(getEntertainmentError(e.data)))
    }
}


export const getArticle = (data)=>{
    return{
        type:_.GET_ARTICLE_SUCCESS,
        payload:data
    }
 }
