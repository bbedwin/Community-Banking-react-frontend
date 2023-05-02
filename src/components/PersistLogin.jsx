
import useRefreshToken from "../hooks/useRefresh";
import { useContext, useEffect, useState } from "react";
import ProjectContext from "../context/MainContext";

import React from 'react'
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
    const { authToken } = useContext(ProjectContext)
    const [isLoading, setIsLoading] = useState(true)

    const refresh = useRefreshToken()

    useEffect(() => {
        const verifyIfHasToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        !authToken && localStorage.getItem('status') === '1' ? verifyIfHasToken() : setIsLoading(false)

    }, [])

    return (
        <>
            {
                isLoading ? <p className="text-center mt-5">Loading...</p> : <Outlet />
            }
        </>
    )
}

export default PersistLogin