import React from 'react';

export const FormInput = ({ label, id, type, errorMessage, register }) => {
  return (
    <div className="mb-7">
      <div className="flex justify-between">
        <p className="text-lg font-bold pl-6">
          {label} <span className="ml-1 text-red-600">*</span>
        </p>
        {errorMessage ? <p className="text-red-600 text-sm font-semibold">{errorMessage}</p> : null}
      </div>
      {type === 'text' ? (
        <input
          {...register(id)}
          type="text"
          className={`mt-3 pl-6 py-3 border focus:border-orange-300 rounded-2xl w-full outline-none ${
            errorMessage ? 'border-red-600' : 'border-gray-400'
          }`}
          placeholder="Write here"
        />
      ) : (
        <textarea
          {...register(id)}
          cols="30"
          rows="4"
          type="text"
          className={`mt-3 pl-6 py-3 border focus:border-orange-300 rounded-2xl w-full outline-none ${
            errorMessage ? 'border-red-600' : 'border-gray-400'
          }`}
          placeholder="Write here"
        />
      )}
    </div>
  );
};
