import * as Yup from 'yup'

export const validationSchema = Yup.object({
    oldPassword: Yup.string().min(6, 'En az 6 karakter olmalı').required('Zorunlu Alan'),
    password: Yup.string().min(6, 'En az 6 karakter olmalı').required('Zorunlu Alan'),
    passwordRepeat: Yup.string().min(6, 'En az 6 karakter olmalı').required('Zorunlu Alan'),
})