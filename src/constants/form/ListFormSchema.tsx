import * as Yup from 'yup';
import {listColors} from "../ListColors";

export const listFormSchema = Yup.object().shape({
    name: Yup.string().required('Ad gerekli').min(3, "En az 3 karakter içermeli"),
    colorCode: Yup.string(),
});

export const listInitialValues = {
    name: '',
    colorCode: listColors[0]
};
