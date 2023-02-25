import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().required("Campo requerido"),
});
