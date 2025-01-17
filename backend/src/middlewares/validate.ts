import Joi from 'joi'

export const signUpSchema = (data: Record<string, string | number>) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(20).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'ma'] },
      })
      .required(),
    password: Joi.string().min(6).max(20).required(),
  })
  return schema.validate(data, { allowUnknown: true })
}

export const signInSchema = (data: Record<string, string | number>) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'ma'] },
      })
      .required(),
    password: Joi.string().min(6).max(20).required(),
  })
  return schema.validate(data, { allowUnknown: true })
}

export const updateProfileSchema = (data: Record<string, string | number>) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().email({
      minDomainSegments: 3,
      tlds: { allow: ['com', 'net', 'ma'] },
    }),
    password: Joi.string().alphanum().min(6).max(20),
  })
  return schema.validate(data, { allowUnknown: true })
}
