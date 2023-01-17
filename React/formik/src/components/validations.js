import { object, string, number, date, InferType, ref } from 'yup';

const validations = object().shape({
    email: string().email("Geçerli bir email girin!").required("Zorunlu alan"),
    password: string().min(5, 'Parolanız en az beş karakter olalıdır').required("Zorunlu alan"),
    passwordConfim: string().oneOf([ref("password")], 'Parolalar uyuşmuyor').required("Zorunlu alan")
});

export default validations;