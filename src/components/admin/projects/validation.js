import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('Zorunlu alan.'),
    github: Yup.string().required('Zorunlu alan.'),
    live: Yup.string().required('Zorunlu alan.'),
    about: Yup.string().required('Zorunlu alan.'),
    techs: Yup.string().required('Zorunlu alan.')

})