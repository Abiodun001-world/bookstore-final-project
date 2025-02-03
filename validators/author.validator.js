const Joi = require("joi");

const authorAddSchema = Joi.object({
  firstname: Joi.string()
            .max(255)
            .trim()
            .required(),
  lastname: Joi.string()
           .max(255)
           .trim()
           .required(),
  dob: Joi.date()
           .greater('01-01-1900')
           .less('01-01-2022')
          .required(),
  country: Joi.string()
          .optional(),
  books: Joi.array()
           .items(Joi.string())
           .optional(),
  ceatedAt: Joi.date()
         .default(Date.now),
  lastUpdateAt: Joi.date()
          .default(Date.now),
});

const updateAuthorSchema = Joi.object({
  firstname: Joi.string()
  .max(255)
  .trim(),
  lastname: Joi.string()
  .max(255)
  .trim(),
  dob: Joi.date()
  .min(1900)
  .max(2022),
  country: Joi.string(),
  books: Joi.array()
      .items(Joi.string())
});

async function AddAuthorValidationMw(req, res, next) {
  const authorPayLoad = req.body;

  try {
    await authorAddSchema.validateAsync(authorPayLoad);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
}

async function UpdateAuthorValidationMw(req, res, next) {
  const authorPayLoad = req.body;

  try {
    await updateAuthorSchema.validateAsync(authorPayLoad);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
}

module.exports = {
  AddAuthorValidationMw,
  UpdateAuthorValidationMw,
};
