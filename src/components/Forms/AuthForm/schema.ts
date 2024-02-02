import * as yup from 'yup';
import { authFormShape } from '../shapes';

const validationSchema = yup.object().shape(authFormShape).required();

export default validationSchema;
