"use client";
import useSystemTheme from "@/hook/systenTheme";
import "./Slider.css";

export const Slider = () => {
  const { theme, toggleTheme } = useSystemTheme();
  return (
    <>
      <div className={theme === "dark" ? "dark-slider" : "white-slider"}>
        <h1 className="text-3xl font-bold text-blue-700">Hello world!</h1>
      </div>
    </>
  );
};
