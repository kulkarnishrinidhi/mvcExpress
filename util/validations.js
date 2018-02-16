var Joi = require('joi');

const registerSchema = Joi.object().keys({
    fname: Joi.string().required(),
    phoneno: Joi.string().length(10).required(),
    email: Joi.string().email().required(),
    hdenbpgtitle: Joi.string().valid("pagetitle").required(),
    bpgtitle: Joi.string().valid('bpgtitle').required()
})

module.exports = {
    registerSchema: registerSchema
}







