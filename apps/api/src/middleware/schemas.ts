const Joi = require("joi");

const schemas = {
    loginSchema: Joi.object({
        password: Joi.string().min(5).max(15).required(),
        userName: Joi.string().min(6).max(15).required()
    }),
    AddVacationSchema: Joi.object({
        destination: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        to_date: Joi.date().required(),
        from_date: Joi.date().required(),
        price: Joi.number().min(200).max(100000).required()
    }),
    registerSchema: Joi.object({
      password: Joi.string().min(5).max(15).required(),
      user_name: Joi.string().min(6).max(15).required(),
      first_name: Joi.string().min(2).max(10).required(),
      last_name: Joi.string().min(2).max(10).required()
  }),
}

  export function validateAddVacation(req, res, next) {
    const { error } = schemas.AddVacationSchema.validate(req.body);
    if (error) return next(new Error(error.message));
    next();
  }
  export function validateLogin(req, res, next) {
    const { error } = schemas.loginSchema.validate(req.body);
    if (error) return next(new Error(error.message));
    next();
  }

  export function validateRegister(req, res, next) {
    console.log("============validateRegister=========")
    const { error } = schemas.registerSchema.validate(req.body);
    console.log(error);
    console.log("============validateRegisterOut=========")
    if (error) return next(new Error(error.message));
    next();
  }  




