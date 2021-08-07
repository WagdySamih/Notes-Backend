const Joi = require("joi");

module.exports = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isCompleted: Joi.boolean().optional(),
});
