"use client"
import { Formik, Form, Field } from 'formik'
import { createSocial, updateSocial } from '@/services/socials'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { socialSelect } from '@/utils/socials'
import { getCookie } from 'cookies-next'

function SocialForm({ data, totalCount }) {
    const router = useRouter()

    const handleSubmit = async (values, bag) => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        if (data?.sort !== values.sort) values.oldSort = data.sort
        const res = data ? await updateSocial(data._id, values, authorization) : await createSocial(values, authorization)

        if (res.status) {
            toast.success('Sosyal medya kaydedildi.')
            router.refresh()
            router.push('/dashboard/socials')
        } else {
            toast.error('Hata meydana geldi.')
            bag.resetForm()
        }
    }

    return (
        <Formik
            initialValues={{
                title: data?.title ?? '',
                name: data?.name ?? '',
                link: data?.link ?? '',
                sort: data?.sort ?? +totalCount + 1
            }}
            validationSchema={validationSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Sıra</span>
                            {errors.sort && touched.sort ? <span className='form-error'>{errors.sort}</span> : null}
                        </div>
                        <Field name='sort' className='input-style' type='number' min='1' max={!data ? +totalCount + 1 : totalCount} disabled={!data ? true : false} />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Sosyal Medya Seçiniz</span>
                            {errors.title && touched.title ? <span className='form-error'>{errors.title}</span> : null}
                        </div>
                        <Field name='title' className='input-style' component='select' >
                            <option disabled>Sosyal medya seçiniz</option>
                            {socialSelect.map((social, i) => (
                                <option key={i} value={social.value}>{social.name}</option>
                            ))}
                        </Field>
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>İsim</span>
                            {errors.name && touched.name ? <span className='form-error'>{errors.name}</span> : null}
                        </div>
                        <Field name='name' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Sosyal Medya URL</span>
                            {errors.link && touched.link ? <span className='form-error'>{errors.link}</span> : null}
                        </div>
                        <Field name='link' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!' : 'Sosyal Medya Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default SocialForm