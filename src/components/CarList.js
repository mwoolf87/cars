import React from "react";
import { useSelector } from "react-redux";

const CarList = () => {
  const cars = useSelector(state => {
    return state.cars.data;
  });
  return <div>CarList</div>;
};

export default CarList;
