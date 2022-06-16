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
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getDataSuccess(r.data.articles)))
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
        axios.get('https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getBusinessSuccess(r.data.articles)))
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
        axios.get('https://newsapi.org/v2/top-headlines?category=science&country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getScienceSuccess(r.data.articles)))
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
        axios.get('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getSportsSuccess(r.data.articles)))
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
        axios.get('https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getTechSuccess(r.data.articles)))
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
        axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=b2a6360a3d6d43be9e1c0e1ff86a4721')
        .then(r=>dispatch(getEntertainmentSuccess(r.data.articles)))
        .catch(e=>dispatch(getEntertainmentError(e.data)))
    }
}


export const getArticle = (data)=>{
    return{
        type:_.GET_ARTICLE_SUCCESS,
        payload:data
    }
 }
