import { celebrate, Joi } from 'celebrate';

export const getUserByIdValidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
});
