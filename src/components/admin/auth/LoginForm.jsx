"use client"
import { loginSchema } from './validations'
import { Formik, Form, Field } from 'formik'
import Link from 'next/link'
import { useState } from 'react'
import { login } from '@/services/auth'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function LoginForm() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    
    const handleSubmit = async (values, bag) => {
        const res = await login(values)
        
        if(res.status) {
            setCookie('token', res.token);
            router.push('/dashboard')
            toast.success('Giriş başarılı.')
        } else {
            toast.error(res.message)
        }
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Kullanıcı Adı</span>
                            {errors.email && touched.email ? <span className='form-error'>{errors.email}</span> : null}
                        </div>
                        <Field name='email' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Şifre</span>
                            {errors.password && touched.password ? <span className='form-error'>{errors.password}</span> : null}
                        </div>
                        <div className='relative'>
                            <Field name='password' type={show ? 'text':'password'} className='input-style' />
                            <button type='button' onClick={() => setShow(prev => !prev)} className='absolute top-1/2 -translate-y-1/2 right-2.5'>
                                {show ? <FaEye />:<FaEyeSlash/>}
                            </button>
                        </div>
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>Giriş Yap!</button>
                    <div className='flex justify-between text-sm font-thin px-5'>
                        <Link href={'/register'}>Kayıt Ol!</Link>
                        <Link href={'/recover-password'}>Şifremi Unuttum!</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm