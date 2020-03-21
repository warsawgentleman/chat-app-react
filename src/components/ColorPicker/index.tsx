import React, { useState, useEffect } from "react";
import { SketchPicker, ColorResult } from "react-color";
import { getRandomColor } from "../../utils";
import "./style.css";

export const ColorPicker = () => {
  const [color, setColor] = useState(getRandomColor());
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (result: ColorResult) => {
    setColor(result.hex);
  };

  const togglePicker = () => setShowPicker(!showPicker);

  useEffect(() => {
    document.body.style.setProperty("--color-main", color);
  }, [color]);

  return (
    <div>
      <span>Your color is </span>
      <div className="picker-sample" onClick={togglePicker}>
        Click to change
      </div>
      {showPicker && (
        <>
          <br />
          <SketchPicker color={color} onChangeComplete={handleChange} />
        </>
      )}
    </div>
  );
};
