const Joi = require("joi");

module.exports = Joi.object().keys({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  isCompleted: Joi.boolean().optional(),
});
