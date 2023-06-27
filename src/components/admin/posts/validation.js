import * as Yup from 'yup'

export const validationSchema = Yup.object({
    title: Yup.string().required('Zorunlu alan.'),
    post: Yup.string().required('Zorunlu alan.'),
    hashtag: Yup.string().required('Zorunlu alan.')
})