import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('Zorunlu alan.'),
    link: Yup.string().required('Zorunlu alan.'),
    sort: Yup.number().required('Zorunlu alan.')
})