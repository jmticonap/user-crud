import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useUserDB = () => {
    const serverUrl = 'https://users-crud1.herokuapp.com'
    const endPoint = {
        list: '/users/',
        save: '/users/',
        getById: id => `/users/${id}/`,
        delete: id => `/users/${id}/`,
        update: id => `/users/${id}/`
    }
    const [data, setData] = useState([])
    const [newUser, setNewUser] = useState(null)

    const requestList = () => {
        axios
            .get(`${serverUrl}${endPoint.list}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }
    const requestSave = (newUser) => {
        axios
            .post(`${serverUrl}${endPoint.save}`,newUser)
            .catch(err => console.log(err))
    }
    const requestUpdate = (id, user) => {
        axios
            .put(`${serverUrl}${endPoint.update(id)}`, user)
            .catch(err => console.log(err))
    }
    const requestDelete = id => {
        axios
            .delete(`${serverUrl}${endPoint.delete(id)}`)
            .catch(err => console.log(err))
        setData( data.filter(user => user.id != id) )
    }

    const saveUser = obj => {
        if(obj.hasOwnProperty("id")){
            requestUpdate(obj.id, obj.user)
        }else{
            requestSave(obj.user)
        }
    }

    useEffect(()=>{
        requestList()
    },[])

    return {data, setNewUser, saveUser, requestDelete}
};

export default useUserDB;