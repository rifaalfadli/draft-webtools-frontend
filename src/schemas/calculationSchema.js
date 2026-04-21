import * as yup from "yup";
import { poleSchema } from "./poleSchema";
import { directObjectSchema } from "./directObjectSchema";

export const calculationSchema = yup.object({
  pole: poleSchema,
  object: directObjectSchema,
});
