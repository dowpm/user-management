const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().min(2).required().description('First Name'),
  lastName: Joi.string().min(2).required().description('Last Name'),
  email: Joi.string().email().required().description('Email'),
  phoneNumber: Joi.string()
    .pattern(/^\d{3}-\d{3}-\d{4}$/)
    .message('Phone Number must be in format 123-456-7890')
    .optional()
    .description('Phone Number'),
  address: Joi.string().min(5).required().description('Address'),
  birthdate: Joi.date().iso().required().description('Birthdate'),
})
  .required()
  .label('User');

const userIdParam = Joi.object({
  id: Joi.number().integer().required().description('User ID'),
})
  .required()
  .label('UserIdParam');

module.exports = {
  userSchema,
  userIdParam,
};
