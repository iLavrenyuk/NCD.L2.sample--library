import Dropzone from 'react-dropzone';
import React, { useState } from 'react';
import { ReactComponent as PlusInCircleSvg } from '../../assets/svg/plusInCircle.svg';

export const DrugNDrop = ({ setValue }) => {
  const [image, setImage] = useState();

  const getBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64 = await reader.result;
      setImage(base64);
      setValue('image', base64);
    };
    return image;
  };

  return (
    <Dropzone maxFiles={1} accept="image/*" onDrop={(acceptedFiles) => getBase64(acceptedFiles[0])}>
      {({ getRootProps, getInputProps }) => (
        <div
          className="flex flex-col justify-center items-center ml-auto mb-4 w-full lg:w-2/3 h-96 lg:h-full border-dashed border-4 border-gray-300 text-gray-300 hover:text-orange-400 cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {image ? (
            <img className="z-10" src={image} alt="" />
          ) : (
            <>
              <span className="mb-5">
                <PlusInCircleSvg />
              </span>
              Add a cover
            </>
          )}
        </div>
      )}
    </Dropzone>
  );
};
