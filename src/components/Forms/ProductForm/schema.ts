import * as yup from 'yup';
import { productFormShape } from '../shapes';

const validationSchema = yup.object().shape(productFormShape).required();

export default validationSchema;
