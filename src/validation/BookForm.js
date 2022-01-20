import * as Yup from 'yup';

const text = Yup.string()
  .required('This field is required')
  .min(2, 'Must be at least 2 characters')
  .max(100, 'Field can be up to 100 characters long');

export const addBookSchema = Yup.object({
  name: text,
  author: text,
  numpage: text,
  datepublished: text,
  isbn: text,
  editions: Yup.string().required('This field is required'),
  downloadURL: text,
  description: Yup.string()
    .required('This field is required')
    .min(2, 'Must be at least 2 characters')
    .max(1000, 'Field can be up to 100 characters long'),
});
