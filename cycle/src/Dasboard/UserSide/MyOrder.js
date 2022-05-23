import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebse.init';
import Loading from '../../Shared/Loading';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyOrder = () => {
    const[user]= useAuthState(auth);
    const navigate = useNavigate();
    const email = user.email;
    const {data: myorders, isLoading } = useQuery("myorderDetais", () =>
        fetch(`http://localhost:4000/order?email=${email}`, {
          method: "get",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
        }).then((res) =>{ 
            if(res.status === 401 || res.status === 403 ){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/home');
            }
            console.log(res);
           return res.json()})
      );
      if (isLoading) {
        console.log(myorders);
        return <Loading/>;
      }

    return (
        <div className='text-3xl'>
            my order{myorders?.length}
        </div>
    );
};

export default MyOrder;