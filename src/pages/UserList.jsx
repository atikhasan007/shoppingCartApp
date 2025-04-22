import React, { useEffect } from 'react';
import { fetchUserList } from '../store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

    const {isLoading , users , errorMessage} = useSelector((storeState) => storeState.user);
     
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserList());   
    },[])


   console.log(users, "users");

  return (
    <div>
        <h2>ALL users </h2>
        {isLoading && <h2>Loading....</h2>}
        {errorMessage && <h2>{errorMessage}</h2>}
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.id}>{user.id} - {user.name}</li>

                )
            })}
        </ul>
      
    </div>
  )
}

export default UserList
