import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from './FormInput';
import { DrugNDrop } from '../DrugNDrop';
import { useForm } from 'react-hook-form';
import { routes } from '../../router/routes';
import { addBook } from '../../services/near';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBookSchema } from '../../validation/BookForm';
import { ReactComponent as ArrowBackSvg } from '../../assets/svg/arrowBack.svg';
import { defaultValues, formFieldsRight, formFieldsLeft } from '../../constants/formData';

export const AddBookForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(addBookSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    addBook(data);
  };

  return (
    <section>
      <div className="container mx-auto px-6">
        <Link to={routes.Home} className="inline-flex text-gray-400 hover:text-orange-300 font-semibold">
          <span className="mr-2">
            <ArrowBackSvg />
          </span>
          Go back
        </Link>

        <div className="relative flex">
          <img
            src={require('../../assets/img/center-book.png')}
            alt=""
            className="hidden lg:block absolute left-2/3 xl:left-1/2 top-0"
          />
          <img
            src={require('../../assets/img/right-u-book.png')}
            alt=""
            className="hidden lg:block absolute -top-20 right-0"
          />

          <div>
            <p className="text-4xl lg:text-6xl font-bold">Add new book</p>
            <p className="text-sm lg:text-lg mt-3">Write a information about book</p>
          </div>

          <img src={require('../../assets/img/Right_arrow_curved.png')} alt="" className="w-20 md:w-auto" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row mt-7">
          <div className="w-full lg:w-1/2 lg:mr-12">
            {formFieldsLeft.map((field) => (
              <FormInput
                key={field.id}
                label={field.label}
                id={field.id}
                type={field.type}
                errorMessage={errors?.[field.id]?.message}
                register={register}
              />
            ))}
            <button
              type="submit"
              className="inline-block mt-7 w-full h-14 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full p-0.5 transform active:scale-95 duration-100"
            >
              <div className="w-full h-full bg-transparent hover:bg-white rounded-full">
                <p className="flex justify-center items-center h-full text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-orange-300 hover:to-orange-400">
                  Add book +
                </p>
              </div>
            </button>
          </div>
          <div className="relative w-full max-h-96 lg:w-1/2 px-10 mt-20 lg:mt-0">
            <img
              src={require('../../assets/img/cover-note.png')}
              alt=""
              className="absolute -top-20 right-0 hover:z-20"
            />

            <DrugNDrop setValue={setValue} />
            {formFieldsRight.map((field) => (
              <FormInput
                key={field.id}
                label={field.label}
                id={field.id}
                type={field.type}
                errorMessage={errors?.[field.id]?.message}
                register={register}
              />
            ))}
          </div>
        </form>
        <div className="w-full">
          <img src={require('../../assets/img/right-b-book.png')} alt="" className="ml-auto" />
          <img src={require('../../assets/img/left-book.png')} alt="" />
        </div>
      </div>
    </section>
  );
};
