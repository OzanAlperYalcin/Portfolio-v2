"use client"
import Editor from '../editor'
import { Formik, Form, Field } from 'formik'
import { createPost, updatePost } from '@/services/posts'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { getCookie } from 'cookies-next'
import { generateSlug } from '@/utils/blog'

function PostForm({ data, uid }) {
    const router = useRouter()

    const handleSubmit = async (values, bag) => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        values.slug = generateSlug(values.title)
        values.uid = uid
        const res = data ? await updatePost(data._id, values, authorization) : await createPost(values, authorization)

        if (res.status) {
            toast.success('Gönderi kaydedildi.')
            router.refresh()
            router.push('/dashboard/posts')
        } else {
            toast.error('Hata meydana geldi.')
            bag.resetForm()
        }
    }

    return (
        <Formik
            initialValues={{
                title: data?.title ?? '',
                post: data?.post ?? '',
                photoURL: data?.photoURL ?? '',
                hashtag: data?.hashtag ?? '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ values, errors, touched, isSubmitting, setFieldValue, setFieldTouched }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Gönderi Başlığı</span>
                            {errors.title && touched.title ? <span className='form-error'>{errors.title}</span> : null}
                        </div>
                        <Field name='title' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Gönderi Fotoğrafı</span>
                            {errors.photoURL && touched.photoURL ? <span className='form-error'>{errors.photoURL}</span> : null}
                        </div>
                        <Field name='photoURL' className='input-style' />
                    </label>
                    <div className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Gönderi Yazısı</span>
                            {errors.post && touched.post ? <span className='form-error'>{errors.post}</span> : null}
                        </div>
                        <Editor post={values.post} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} />
                    </div>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Hashtag</span>
                            {errors.hashtag && touched.hashtag ? <span className='form-error'>{errors.hashtag}</span> : null}
                        </div>
                        <Field name='hashtag' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!':'Gönderi Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default PostForm