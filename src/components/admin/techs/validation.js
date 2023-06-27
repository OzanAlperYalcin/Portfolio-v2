import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('Zorunlu alan.'),
    type: Yup.string().required('Zorunlu alan.'),
    hashtag: Yup.string().required('Zorunlu alan.')
})