const Joi = require("joi");

module.exports = Joi.object().keys({
  page: Joi.number(),
  limit: Joi.number(),
  search: Joi.string().allow(""),
});
