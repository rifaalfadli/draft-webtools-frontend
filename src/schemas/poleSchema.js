import * as yup from "yup";

export const poleSchema = yup.object({
  diameterPole: yup
    .number()
    .typeError("*Diameter must be a number")
    .required("*Diameter is required")
    .positive("*Diameter must be greater than 0"),

  thicknessPole: yup
    .number()
    .typeError("*Thickness must be a number")
    .required("*Thickness is required")
    .positive("*Thickness must be greater than 0"),

  heightPole: yup
    .number()
    .typeError("*Height must be a number")
    .required("*Height is required")
    .positive("*Height must be greater than 0"),

  lowestHeightPole: yup
    .number()
    .typeError("*Lowest height must be a number")
    .required("*Lowest height is required")
    .min(0, "*Lowest height cannot be negative"),

  materialPole: yup.string().required("*Material selection is required"),
});
