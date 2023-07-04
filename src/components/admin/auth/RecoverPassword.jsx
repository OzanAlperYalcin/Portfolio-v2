"use client"
import Link from 'next/link'
import { loginSchema } from './validations'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
// import { FaEye, FaEyeSlash } from 'react-icons/fa'

function RecoverPasswordForm() {
    const [show, setShow] = useState(false)
    const handleSubmit = (values, bag) => {
        console.log(values, bag)
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Kullanıcı Adı</span>
                            {errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}
                        </div>
                        <Field name='email' type='email' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>Giriş Yap!</button>
                    <div className='flex justify-between text-sm font-thin px-5'>
                        <Link href={'/login'}>Giriş Yap!</Link>
                        <Link href={'/register'}>Kayıt Ol!</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RecoverPasswordForm