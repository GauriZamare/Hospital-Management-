import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from './Pages/Variable';
function PrivateRoute() {


if(isLogin()){
    return(<Outlet/>)
}
else
  return (
   <Navigate to='/Login'/>
  )
}

export default PrivateRoute