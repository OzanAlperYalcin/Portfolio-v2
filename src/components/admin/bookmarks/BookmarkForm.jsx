"use client"
import { Formik, Form, Field } from 'formik'
import { createBookmark, updateBookmark } from '@/services/bookmarks'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { getCookie } from 'cookies-next'

function BookmarkForm({ data }) {
    const router = useRouter()

    const handleSubmit = async (values, bag) => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        const res = data ? await updateBookmark(data._id, values, authorization) : await createBookmark(values, authorization)

        if (res.status) {
            toast.success('Yer imi kaydedildi.')
            router.refresh()
            router.push('/dashboard/bookmarks')
        } else {
            toast.error('Hata meydana geldi.')
            bag.resetForm()
        }
    }

    return (
        <Formik
            initialValues={{
                title: data?.title ?? '',
                description: data?.description ?? '',
                link: data?.link ?? '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Başlık</span>
                            {errors.title && touched.title ? <span className='text-red-500'>{errors.title}</span> : null}
                        </div>
                        <Field name='title' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Açıklama</span>
                            {errors.description && touched.description ? <span className='text-red-500'>{errors.description}</span> : null}
                        </div>
                        <Field name='description' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Link</span>
                            {errors.link && touched.link ? <span className='text-red-500'>{errors.link}</span> : null}
                        </div>
                        <Field name='link' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!':'Yer İmi Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default BookmarkForm