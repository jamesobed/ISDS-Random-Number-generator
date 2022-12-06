// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";
import RandomBtn from "../RandomBtn/RandomBtn";
import ShowRandom from "../ShowRandomNumber/ShowRandom";

import Toast from "../toast/toast";

const Random = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [isError, setIsError] = useState(false);

  const minInput = useRef();
  const maxInput = useRef();

  const handleMin = (e) => {
    setMin(e.target.value);
    setIsError(false);
  };

  const handleMax = (e) => {
    setMax(e.target.value);
    setIsError(false);
  };

  const handleRandom = () => {
    if (min < 0 || max <= 0) {
      setIsError(true);
    } else {
      setIsError(false);
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      setCount(random);
      console.log(random);
    }
  };

  useEffect(() => {
    minInput.current.focus();
  }, []);

  return (
    <div className="random" id="container">
      {isError && (
        <>
          <div className="alert-error">
            Minimum number must be positive and maximum number must be greater than 1
          </div>
          <Toast />
        </>
      )}
      <div className="random__container">
        <ShowRandom count={count} />
        <div className="random__container-input">
          <div className="number-input">
            <field>
              <label htmlFor="min">Minimum Number:</label>
            </field>
            <input
              type="number"
              id="number-input"
              className="random__container--input__min"
              value={min}
              onChange={handleMin}
              ref={minInput}
            />
          </div>
          <div className="number-input">
            <field>
              <label htmlFor="min">Maximum Number:</label>
            </field>
            <input
              type="number"
              id="number-input"
              className="random__container--input__max"
              value={max}
              onChange={handleMax}
              ref={maxInput}
            />
          </div>
        </div>
        <RandomBtn randomHandler={handleRandom} />
      </div>
    </div>
  );
};

export default Random;
