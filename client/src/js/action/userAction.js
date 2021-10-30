import axios from 'axios'
import { ADD_USER, ADD_USER_FAIL, ADD_USER_SUCCESS, DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_USER, EDIT_USER_FAIL, EDIT_USER_SUCCESS, GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from '../const'

export const getUsers = () => async (dispatch) => {
    dispatch({type:GET_USERS})
    try {
        const {data} = await axios.get("/api/users")
        dispatch({type:GET_USERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_USERS_FAIL,payload:error.response.data})
    }
}

export const addUser = (user) => async (dispatch) => {
    dispatch({type:ADD_USER})
    try {
        const {data} = await axios.post("/api/add",user)
        dispatch({type:ADD_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_USER_FAIL,payload:error.response.data})
    }
}

export const editUser = (id,modif) => async (dispatch) => {
    dispatch({type:EDIT_USER})
    try {
        const {data} = await axios.put("/api/edit/"+ id,modif)
        dispatch({type:EDIT_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:EDIT_USER_FAIL,payload:error.response.data})
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({type:DELETE_USER})
    try {
        const {data} = await axios.delete(`/api/delete/${id}`)
        dispatch({type:DELETE_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_USER_FAIL,payload:error.response.data})
    }
}


