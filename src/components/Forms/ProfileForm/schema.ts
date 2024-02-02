import * as yup from 'yup';
import { profileFormShape } from '../shapes';

const validationSchema = yup.object().shape(profileFormShape).required();

export default validationSchema;
