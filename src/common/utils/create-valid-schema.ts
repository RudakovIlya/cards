import * as yup from 'yup'

export const createValidationSchema = (arr: string[]) => {
  const validationObject = arr.reduce((accum: any, item) => {
    if (item === 'email') {
      accum[item] = yup.string().email('Email is required!').required('Field is required!')

      return accum
    }
    accum[item] = yup
      .string()
      .min(4, `${item} must be at least 8 characters`)
      .required('Field is required!')

    return accum
  }, {})

  return yup.object().shape({
    ...validationObject,
    confPassword: yup.string().oneOf([yup.ref('password')], 'Passwords does not match'),
    rememberMe: yup.boolean().optional(),
  })
}
