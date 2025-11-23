import * as Yup from 'yup';

export const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W_]{8,}$/;

const validateSchema = {
  password: Yup.string()
    .trim()
    .required('Vui lòng nhập mật khẩu')
    .matches(passwordRegExp, 'Mật khẩu không đúng định dạng'),
  username: Yup.string().trim().required('Vui lòng nhập tên đăng nhập'),
};

export default validateSchema;
