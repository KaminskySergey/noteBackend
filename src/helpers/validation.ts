import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

export const addValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    time: Yup.date(),
    category: Yup.string().oneOf(["Task", "Idea", "Quote"]).default("Quote"),
    content: Yup.string().required(),
    dates: Yup.array().of(Yup.string()),
    archived: Yup.boolean().default(false),
    arrayOfDate: Yup.string()
      .required()
      .matches(/^\d{4}-\d{2}-\d{2}$/)
      .required(),
  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error: any) {
    return res.status(400).json({ status: error.errors, message: "Oops!" });
  }
};

export const addArchived = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    archived: Yup.boolean().required(),
  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error: any) {
    return res
      .status(400)
      .json({ status: error.errors, message: "Validation failed" });
  }
};
