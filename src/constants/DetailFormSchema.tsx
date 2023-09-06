import * as Yup from 'yup';

export const detailFormSchema = Yup.object().shape({
    title: Yup.string().required('Başlık gerekli').min(8, "En az 8 karakter içermeli"),
    description: Yup.string().matches(/.{8,}/,
        { excludeEmptyString: true, message: 'Açıklama en az 8 karakter içermeli' }),
    category: Yup.object({categoryId: Yup.string(), name: Yup.string(), colorCode: Yup.string()}),
    dueAt: Yup.string().required('Bitiş tarihi gerekli')
});

export const detailInitialValues = {
    title: '',
    description: '',
    category: {categoryId: '', name: '', colorCode: ''},
    dueAt: ''
};
