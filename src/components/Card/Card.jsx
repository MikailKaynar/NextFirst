import React from 'react';
import { useDispatch } from 'react-redux';
import { removeData } from '../../stores/dataSlice'; // Redux slice'ın yolu

const Card = ({ id, title, description, tag }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeData(id));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#ECB159]">{title}</div>
        <p className="text-[#B67352] text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag}
        </span>
        <button
          className="bg-red-500 hover:bg-red-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
          onClick={handleRemove}
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default Card;
