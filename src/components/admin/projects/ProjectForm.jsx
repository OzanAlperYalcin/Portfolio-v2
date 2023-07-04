"use client"
import { Formik, Form, Field } from 'formik'
import { createProject, updateProject } from '@/services/projects'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { validationSchema } from './validation'
import { getCookie } from 'cookies-next'

function ProjectForm({ data }) {
    const router = useRouter()

    const handleSubmit = async (values, bag) => {
        const token = getCookie('token')
        const authorization = `Bearer ${token}`
        const res = data ? await updateProject(data._id, values, authorization) : await createProject(values, authorization)

        if (res.status) {
            toast.success('Proje kaydedildi.')
            router.refresh()
            router.push('/dashboard/projects')
        } else {
            toast.error('Hata meydana geldi.')
            bag.resetForm()
        }
    }

    return (
        <Formik
            initialValues={{
                name: data?.name ?? '',
                github: data?.github ?? '',
                live: data?.live ?? '',
                about: data?.about ?? '',
                techs: data?.techs ?? ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, bag) => handleSubmit(values, bag)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className='grid gap-5'>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Proje Adı</span>
                            {errors.name && touched.name ? <span className='form-error'>{errors.name}</span> : null}
                        </div>
                        <Field name='name' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Github Repo</span>
                            {errors.github && touched.github ? <span className='form-error'>{errors.github}</span> : null}
                        </div>
                        <Field name='github' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Demo URL</span>
                            {errors.live && touched.live ? <span className='form-error'>{errors.live}</span> : null}
                        </div>
                        <Field name='live' className='input-style' />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Açıklama</span>
                            {errors.about && touched.about ? <span className='form-error'>{errors.about}</span> : null}
                        </div>
                        <Field name='about' className='textarea-style' component='textarea' rows="5" />
                    </label>
                    <label className='grid gap-2.5'>
                        <div className='flex justify-between text-sm'>
                            <span>Teknolojiler</span>
                            {errors.techs && touched.techs ? <span className='form-error'>{errors.techs}</span> : null}
                        </div>
                        <Field name='techs' className='input-style' />
                    </label>
                    <button type='submit' disabled={isSubmitting} className='btn-primary'>{data ? 'Güncelle!':'Teknoloji Ekle!'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default ProjectForm