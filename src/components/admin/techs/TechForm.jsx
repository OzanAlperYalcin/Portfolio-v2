"use client"
import { Formik, Form, Field } from 'formik'
import { createTech, updateTech } from '@/services/techs'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { techSelect } from '@/utils/techs'
import { getCookie } from 'cookies-next'

function TechForm({ data, totalCount }) {
    const router = useRouter()

    const handleSubmit = async (values, bag) => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        if (data?.sort !== values.sort) values.oldSort = data?.sort
        const res = data ? await updateTech(data._id, values, authorization) : await createTech(values, authorization)

        if (res.status) {
            toast.success('Teknoloji kaydedildi.')
            router.refresh()
            router.push('/dashboard/techs')
        } else {
            toast.error('Hata meydana geldi.')
            bag.resetForm()
        }
    }

    return (
        <Formik
            initialValues={{
                name: data?.name ?? '',
                type: data?.type ?? '',
                sort: data?.sort ?? +totalCount + 1,
                hashtag: data?.hashtag ?? '',
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
                            <span>Teknoloji</span>
                            {errors.name && touched.name ? <span className='form-error'>{errors.name}</span> : null}
                        </div>
                        <Field name='name' className='input-style' component='select' >
                            <option disabled value="">(Teknoloji Seçiniz)</option>
                            {techSelect.map((tech, i) => (
                                <option key={i} value={tech.value}>{tech.name}</option>

                            ))}
                        </Field>
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Teknoloji Türü</span>
                            {errors.type && touched.type ? <span className='form-error'>{errors.type}</span> : null}
                        </div>
                        <Field name='type' className='input-style' component='select' >
                            <option disabled value="">(Tür Seçiniz)</option>
                            <option value='frontend'>Frontend</option>
                            <option value='backend'>Backend</option>
                            <option value='cloud'>Devops / Cloud</option>
                        </Field>
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Hashtag</span>
                            {errors.hashtag && touched.hashtag ? <span className='form-error'>{errors.hashtag}</span> : null}
                        </div>
                        <Field name='hashtag' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!' : 'Teknoloji Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default TechForm