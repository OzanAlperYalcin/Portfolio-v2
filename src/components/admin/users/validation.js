import * as Yup from 'yup'

export const validationSchema = Yup.object({
    username: Yup.string().required('Zorunlu alan.'),
    email: Yup.string().email().required('Zorunlu alan.'),
    about: Yup.string().required('Zorunlu alan.')
})