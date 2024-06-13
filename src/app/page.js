"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';

const Home = () => {
  const data = useSelector((state) => state.data.dataList);

  return (
    <div className="grid grid-cols-4 grid-rows-1 text-center gap-4">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          tag={item.tag}
        />
      ))}
    </div>
  );
};

export default Home;
