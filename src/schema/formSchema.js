import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("Mohon untuk memasukkan email yang benar")
    .required("email harus diisi"),
    password: yup
    .string("password should be a string")
    .min(5, "minimal password harus berisi 5 karakter")
    .max(12, "maksimal password harus berisi 12 password")
    .required("password harus diisi"),
  confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("konfirmasi password harus diisi"),
  Type: yup
    .string('account type should be a string')
    .required('account type isrequired'),
  remember: yup.boolean().oneOf([true], 'mohon untuk diceklis'),
  // toggle: yup.boolean().oneOf([true], 'Please toggle accept'),
});