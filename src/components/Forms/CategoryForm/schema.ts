import * as yup from 'yup';
import { categoryFormShape } from '../shapes';

const validationSchema = yup.object().shape(categoryFormShape).required();

export default validationSchema;
