import * as types from './ActionTypes'

const initState = {
    top:[],
    error:'',
    loading:false,
    tech:[]
}

const newsReducer = (state=initState,{type,payload})=>{
    switch(type){
       case types.GET_DATA_REQUEST:
           return{
               ...state,
               error:'',
               loading:true
           }
        case types.GET_DATA_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }  
         case types.GET_DATA_SUCCESS:
             return{
                 ...state,
                 loading:false,
                 error:'',
                 top: payload
             }
        case types.GET_TECH_REQUEST:
            return{
                ...state,
                error:'',
                loading:true
            }  
        case types.GET_TECH_ERROR:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }  
         case types.GET_TECH_SUCCESS:
                    return{
                        ...state,
                        error:'',
                        loading:false,
                        tech:payload
                    }             
        default:
            return state   
    }
}
export default newsReducer