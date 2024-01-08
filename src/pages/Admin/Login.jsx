import React from 'react'
import { Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { afterSometime } from '../../utils/helper'
import image from '../../assets/imgs/image'
import { loginAuth } from '../../../service'

const Login = () => {

    const navigate = useNavigate()

    const userData = useSelector(state => state.auth.user)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitForm = (data) => {

        loginAuth(data).then(()=> {

            const token = sessionStorage.getItem('token')

            if(token){
                afterSometime(() => {
                    navigate('/admin/dashboard')
                }, 2000)
            }
        })
    }

    return (
        <>
            <div className='absolute -top-10-a h-full w-full flex'>
                <div className=' self-center grid md:grid-cols-2 w-3/4 lg:w-1/2 mx-auto border rounded-3xl mt-10'>
                    <div className=' hidden md:block bg-slate-600 rounded-l-3xl'>
                        <img className='w-full h-full rounded-l-3xl' src={image.imageAdminLogin} alt="" />
                    </div>
                    <div className=' p-5 py-10 lg:p-10 lg:py-32 bg-primary lg:bg-white md:rounded-r-3xl'>
                        <h1 className='text-center mb-5 text-xl font-bold text-white lg:text-primary'>Login Master</h1>
                        <form onSubmit={handleSubmit(submitForm)}>

                            <input
                                type='text'
                                placeholder='username'
                                name='username'
                                className='appearance-none w-full rounded-full border border-grey text-e-14 py-3 focus:border-grey placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0'
                                {...register('username', { required: true })}
                                aria-invalid={errors.username ? 'true' : 'false'}
                            />
                            {errors.username?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Username is required</p>)}

                            <input
                                type='text'
                                placeholder='Password'
                                name='password'
                                className='appearance-none w-full rounded-full border border-grey text-e-14 py-3 focus:border-grey placeholder:text-grey my-2 bg-transparent px-5 focus:ring-0'
                                {...register('password', { required: true })}
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                            {errors.password?.type === "required" && (<p role="alert" className=' text-red-500 font-light text-sm p-0 mb-5 px-2'>Password is required</p>)}


                            <div className='mt-8'>
                                <button type='submit' className='bg-white lg:bg-primary w-full rounded-full px-3 py-2 text-primary lg:text-white text-base text-center font-medium cursor-pointer'>Login</button>
                            </div>


                            {/* <input type='submit' placeholder='' /> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login