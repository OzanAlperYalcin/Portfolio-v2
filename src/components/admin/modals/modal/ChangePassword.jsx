import { Formik, Form, Field } from 'formik'
import { validationSchema } from './changePasswordValidation'
import { getCookie } from "cookies-next"
import { changePassword } from "@/services/auth"
import { toast } from "react-hot-toast"
import { closeModal } from "@/store/modals/actions"
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function ChangePassword({ data }) {

  const [show, setShow] = useState({ password: false, passwordRepeat: false })

  const handleSubmit = async (values, bag) => {
    const token = getCookie('token')
    const authorization = `Bearer ${token}`
    const res = await changePassword(values, authorization)

    if (res.status) {
      toast.success('Gönderi kaydedildi.')
      closeModal()
    } else {
      toast.error(res.message)
      bag.resetForm()
    }
  }

  return (
    <Formik
      initialValues={{
        id: data,
        oldPassword: '',
        password: '',
        passwordRepeat: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, bag) => handleSubmit(values, bag)}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className='grid gap-5 m-5'>
          <label className='grid gap-2.5'>
            <div className='flex justify-between text-sm'>
              <span>Eski Şifre</span>
              {errors.oldPassword && touched.oldPassword ? <span className='form-error'>{errors.oldPassword}</span> : null}
            </div>
            <Field name='oldPassword' className='input-style' />
          </label>
          <label className='grid gap-2.5'>
            <div className='flex justify-between text-sm'>
              <span>Yeni Şifre</span>
              {errors.password && touched.password ? <span className='form-error'>{errors.password}</span> : null}
            </div>
            <div className='relative'>
              <Field name='password' type={show.password ? 'text':'password'} className='input-style' />
              <button type='button'
                onClick={() => setShow(prev => ({ ...prev, password: !prev.password }))}
                className='absolute top-1/2 -translate-y-1/2 right-2.5'
              >
                {show.password ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
          <label className='grid gap-2.5'>
            <div className='flex justify-between text-sm'>
              <span>Tekrar Yeni Şifre</span>
              {errors.passwordRepeat && touched.passwordRepeat ? <span className='form-error'>{errors.passwordRepeat}</span> : null}
            </div>
            <div className='relative'>
              <Field name='passwordRepeat' type={show.passwordRepeat ? 'text':'password'} className='input-style' />
              <button type='button'
                onClick={() => setShow(prev => ({ ...prev, passwordRepeat: !prev.passwordRepeat }))}
                className='absolute top-1/2 -translate-y-1/2 right-2.5'
              >
                {show.passwordRepeat ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
          <button type='submit' disabled={isSubmitting} className='btn-primary'>Şifreyi Güncelle!</button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword