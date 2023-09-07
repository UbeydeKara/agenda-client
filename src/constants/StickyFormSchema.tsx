import * as Yup from 'yup';

export const stickyFormSchema = Yup.object().shape({
    title: Yup.string().required('Başlık gerekli').min(5, "En az 5 karakter içermeli"),
    description: Yup.string().required('Açıklama gerekli').min(8, "En az 8 karakter içermeli"),
});

export const stickyInitialValues = {
    title: '',
    description: ''
};
