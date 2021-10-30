import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../js/action/userAction'
import AddModal from './AddModal'
import UserCard from './UserCard'

const UserList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
       
    }, [dispatch])
    const users  = useSelector(state => state.userReducer.users)
    const isLoading  = useSelector(state => state.userReducer.isLoading)
    return (
       <div className="mx-auto">
        <div className="d-flex justify-content-around flex-wrap mx-auto">
            {
                 isLoading ? <h1>Loading ....</h1> :
                 users.map(user => (<UserCard key={user._id} user={user}/>))
            }
        </div>
        <AddModal/>
       </div>
    )
}

export default UserList
