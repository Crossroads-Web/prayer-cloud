import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ProfileContext } from '../contexts/ProfileContext'

export default function PrivateRoute ({component: Component, ...rest}) {
    const {worker} = useContext(ProfileContext)
    console.log(worker)
    return worker ? <Outlet /> : <Navigate to ="/login" />;
}

