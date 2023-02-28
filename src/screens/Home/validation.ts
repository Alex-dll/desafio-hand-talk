import * as yup from "yup";

import { verifyIfColorIsValid } from "~/utils/verifyIfColorIsValid";

export const schemaColors = yup.object().shape({
  cube: yup
    .string()
    .test("Color test", "Cor do cubo invalida", (value) =>
      verifyIfColorIsValid(value)
    ),
  cone: yup
    .string()
    .test("Color test", "Cor do cone invalida", (value) =>
      verifyIfColorIsValid(value)
    ),
  dodecahedron: yup
    .string()
    .test("Color test", "Cor do dodecaedro invalida", (value) =>
      verifyIfColorIsValid(value)
    ),
});
