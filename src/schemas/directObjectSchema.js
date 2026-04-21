import * as yup from "yup";

export const directObjectSchema = yup.object({
  nameDo: yup
    .string()
    .required("*Object name is required")
    .min(2, "*Name must be at least 2 characters"),

  areaFrontDo: yup
    .number()
    .typeError("*Front area must be a number")
    .required("*Front area is required")
    .positive("*Front area must be greater than 0"),

  areaSideDo: yup
    .number()
    .typeError("*Side area must be a number")
    .required("*Side area is required")
    .positive("*Side area must be greater than 0"),

  cfDo: yup
    .number()
    .typeError("*Coefficient must be a number")
    .required("*Coefficient is required")
    .min(0.1, "*Coefficient must be at least 0.1"),

  heightDo: yup
    .number()
    .typeError("*Height must be a number")
    .required("*Height is required")
    .positive("*Height must be greater than 0"),

  weightDo: yup
    .number()
    .typeError("*Weight must be a number")
    .required("*Weight is required")
    .positive("*Weight must be greater than 0"),
});
