"use client"
import { Formik, Form, Field } from 'formik'
import { updateUser } from '@/services/users'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { getCookie } from 'cookies-next'
import Modals from '../modals'
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import { usePathname } from 'next/navigation'

function UserForm({ data }) {
    const router = useRouter()
    const modals = useModals()
    const userId = usePathname().split("/").reverse()[0]

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

    if (data?._id !== userId) return 'Böyle bir sayfa mevcut değil.'

    return (
        <>
            {modals.length > 0 && <Modals />}
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
                                {errors.username && touched.username ? <span className='form-error'>{errors.username}</span> : null}
                            </div>
                            <Field name='username' className='input-style' />
                        </label>
                        <label className='grid gap-2.5'>
                            <div className='flex justify-between text-sm'>
                                <span>Meslek</span>
                                {errors.title && touched.title ? <span className='form-error'>{errors.title}</span> : null}
                            </div>
                            <Field name='title' className='input-style' />
                        </label>
                        <label className='grid gap-2.5'>
                            <div className='flex justify-between text-sm'>
                                <span>Email Adresi</span>
                                {errors.email && touched.email ? <span className='form-error'>{errors.email}</span> : null}
                            </div>
                            <Field name='email' type='email' className='input-style' />
                        </label>
                        <label className='grid gap-2.5'>
                            <div className='flex justify-between text-sm'>
                                <span>Resim URL</span>
                                {errors.photoURL && touched.photoURL ? <span className='form-error'>{errors.photoURL}</span> : null}
                            </div>
                            <Field name='photoURL' type='text' className='input-style' />
                        </label>
                        <label className='grid gap-2.5'>
                            <div className='flex justify-between text-sm'>
                                <span>Hakkımda</span>
                                {errors.about && touched.about ? <span className='form-error'>{errors.about}</span> : null}
                            </div>
                            <Field name='about' className='textarea-style' component='textarea' rows={5} />
                        </label>
                        <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!' : 'Teknoloji Ekle!'}</button>
                        <button type='button' onClick={() => createModal({ name: 'change-password', title: `${data.username} Şifre Değiştir`, data: data._id })} className='btn-primary bg-red-500'>Şifre Değiştir!</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UserForm