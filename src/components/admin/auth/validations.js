import * as Yup from "yup"

export const loginSchema = Yup.object({
    email: Yup.string().required('Bu alan boş bırakılamaz!'),
    password: Yup.string().min(6, 'Şifre en az 6 karakterli olmalı!').required('Bu alan boş bırakılamaz!')
})