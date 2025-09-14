// src/config/validation.ts
import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string().required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),

  REDIS_PORT: Joi.number().required(),
});
