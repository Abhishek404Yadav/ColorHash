import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#78a0f5");
  const [inputValue, setInputValue] = useState("#78a0f5");
  const [copied, setCopied] = useState(false);

  const handleHexInput = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (/^#([0-9A-Fa-f]{0,6})$/.test(val)) {
      setColor(val);
    }
  };
  const handleColor = (e) => {
    setColor(e.target.value);
    setInputValue(e.target.value);
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-3 ">
      <h1
        className="font-bold text-5xl w-full text-center py-4  rounded-2xl shadow-md"
        style={{ backgroundColor: color }}
      >
        ColorHash
      </h1>

      <div
        className="relative max h-40 w-64 rounded-lg shadow-inner"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <input
            type="text"
            value={color}
            onChange={handleHexInput}
            className="text-center rounded-md px-4 py-2 text-lg shadow-md bg-white"
            placeholder="#FFFFFF"
          />
        </div>
        <button
          onClick={handleCopy}
          className=" absolute top-2 right-2 flex flex-col w-20 rounded-md bg-white text-gray-800 py-1 hover:scale-110 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p className="font-extralight text-xl text-gray-700">Pick Your Color</p>
      <input
        className="w-16 h-10 border-2 border-b-black cursor-pointer shadow-md transition-transform duration-300 hover:scale-110"
        type="color"
        value={color}
        onChange={handleColor}
      />
    </div>
  );
}
export default ColorPicker;
