import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
    username: Yup.string().required('Başlık gerekli').min(5, "En az 5 karakter içermeli").max(20, "En fazla 20 karakter içermeli"),
    password: Yup.string().required('Parola gerekli').min(8, "En az 8 karakter içermeli").max(50, "En fazla 50 karakter içermeli"),
});

export const loginInitialValues = {
    username: '',
    password: ''
};
