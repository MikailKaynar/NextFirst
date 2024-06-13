"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../stores/dataSlice";
import Loading from "./loading"
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newData = {
      ...formData,
      id: Date.now().toString(),
    };

    dispatch(addData(newData));

    setFormData({
      title: "",
      description: "",
      tag: "",
    });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#faeedb]">
      {loading ? (
        <Loading />
      ) : (
        <form
          className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6">
            <label
              className="block text-gray-500 font-bold text-right mb-1 pr-4"
              htmlFor="title"
            >
              Başlık
            </label>
            <input
              id="title"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:bg-white focus:border-[#ECB159]"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-500 font-bold text-right mb-1 pr-4"
              htmlFor="description"
            >
              Açıklama
            </label>
            <input
              id="description"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:bg-white focus:border-[#ECB159]"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-500 font-bold text-right mb-1 pr-4"
              htmlFor="tag"
            >
              Etiket
            </label>
            <input
              id="tag"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:bg-white focus:border-[#ECB159]"
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="shadow bg-[#B67352] hover:bg-[#ECB159] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Ekle
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Page;
