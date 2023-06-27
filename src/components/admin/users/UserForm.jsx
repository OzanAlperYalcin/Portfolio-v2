"use client"
import { Formik, Form, Field } from 'formik'
import { updateUser } from '@/services/users'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { getCookie } from 'cookies-next'

function UserForm({ data }) {
    const router = useRouter()

    const handleSubmit = async values => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        const res = await updateUser(data._id, values, authorization)

        if (res.status) {
            toast.success('Kullanıcı bilgileri değiştirildi.')
            router.refresh()
        } else {
            toast.error('Hata meydana geldi.')
        }
    }

    return (
        <Formik
            initialValues={{
                username: data?.username ?? '',
                email: data?.email ?? '',
                about: data?.about ?? '',
                photoURL: data?.photoURL ?? '',
                title: data?.title ?? ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Ad Soyad</span>
                            {errors.username && touched.username ? <span className='text-red-500'>{errors.username}</span> : null}
                        </div>
                        <Field name='username' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Meslek</span>
                            {errors.title && touched.title ? <span className='text-red-500'>{errors.title}</span> : null}
                        </div>
                        <Field name='title' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Email Adresi</span>
                            {errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}
                        </div>
                        <Field name='email' type='email' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Resim URL</span>
                            {errors.photoURL && touched.photoURL ? <span className='text-red-500'>{errors.photoURL}</span> : null}
                        </div>
                        <Field name='photoURL' type='text' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Hakkımda</span>
                            {errors.about && touched.about ? <span className='text-red-500'>{errors.about}</span> : null}
                        </div>
                        <Field name='about' className='textarea-style' component='textarea' rows={5} />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!':'Teknoloji Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default UserForm