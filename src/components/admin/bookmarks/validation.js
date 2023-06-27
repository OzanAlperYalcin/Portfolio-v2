import * as Yup from 'yup'

export const validationSchema = Yup.object({
    title: Yup.string().required('Zorunlu alan.'),
    description: Yup.string().required('Zorunlu alan.'),
    link: Yup.string().required('Zorunlu alan.')
})