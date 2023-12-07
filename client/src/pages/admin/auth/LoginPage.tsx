import React from 'react'
import { login } from '../../../api/auth/authApi'
import { useAuthStore } from '../../../app/store'
import LoginForm from './LoginForm'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { SyncLoader } from "react-spinners"

const LoginPage = () => {
    const navigate = useNavigate()
    const { setToken } = useAuthStore()

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const queryClinet = useQueryClient()
    const {
        isIdle,
        isLoading,
        isSuccess,
        isError,
        error,
        mutate: loginMutate,
        data
    } = useMutation("token", login, {
        onSuccess: () => {
            queryClinet.invalidateQueries()
        }
    })

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (username !== "" && password !== ""){
            loginMutate({ username, password, })
        } else {
            alert("please check your password and username")
        }
    }

    React.useEffect(() => {
        if (isSuccess){
            const accessToken = data?.data?.accessToken
            setToken(accessToken)
            navigate("admin/dash")
            
        }
    }, [isSuccess, setToken])

    React.useEffect(() => {
        if(isError){
            console.log(error)
        }
    }, [isError])

    let content
    if (isIdle) {
        content = (
            <LoginForm 
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleSubmit={handleSubmit} 
            />
        )
    }

    if (isLoading) {
        content = <SyncLoader />
    }

    if (isError) {
        content = <>{JSON.stringify(error)}</>
    }

    return (
        <main className='w-full h-[calc(100vh-4*40px)]  grid place-content-center '>
            {content}
        </main>
    )
}

export default LoginPage