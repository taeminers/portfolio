import React, { useState, useEffect } from "react";
import * as S from "./styles.css";

export const DescriptionLoop = () => {
  const initialArray = [
    "Passionate",
    "Creative",
    "Innovative",
    "a Dreamer",
    '"Full Stack"',
  ];

  const [descriptionArray, setDescriptionArray] = useState(initialArray);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptionArray((prevArray) => {
        const newArray = [...prevArray];
        const lastElement = newArray.pop();
        newArray.unshift(lastElement!);
        return newArray;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={S.container}>
      {descriptionArray.map((description, index) => (
        <div key={index} className={S.descriptionItem}>
          {description}
        </div>
      ))}
    </div>
  );
};
