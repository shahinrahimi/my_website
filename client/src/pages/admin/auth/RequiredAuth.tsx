import React from 'react'
import { Outlet } from 'react-router-dom'
import { useMutation } from 'react-query'
import { refresh } from '../../../api/auth/authApi'
import { SyncLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../app/store'

const RequiredAuth = () => {
    const naviagete = useNavigate()
    const effectRan = React.useRef(false)
    const { setToken } = useAuthStore()
    const [trueSuccess, setTrueSuccess] = React.useState(false)

    const {
        isIdle,
        isLoading,
        isSuccess,
        isError,
        error,
        data,
        mutate: refreshMutation
    } = useMutation('token',refresh)

    React.useEffect(() => {

    let intervalId: NodeJS.Timeout
    // 4min interval
    const refreshInterval = () => {
        refreshMutation()
        intervalId = setInterval(() => {
        refreshMutation()
        }, 4 * 60 * 1000);
    }

    // make effect ran just one even in development mode (strict mode)
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
        refreshInterval()
    }

    return () => {
        effectRan.current = true
        if (intervalId) {
        // clear interval
        clearInterval(intervalId)
        }
    }
    },[])

    React.useEffect(() => {
    if (isSuccess) {
        const accessToken = data?.data?.accessToken
        setToken(accessToken)
        setTrueSuccess(true)
    }
    }, [isSuccess, setToken])

    React.useEffect(() => {
    if (isError){
        setToken(null)
        naviagete("/admin")
    }
    }, [isError])


    let content

    if (isLoading) {
        content = <SyncLoader />
    }

    if (trueSuccess){
        content = <Outlet />
    }

    return content
}

export default RequiredAuth