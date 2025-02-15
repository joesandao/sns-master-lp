"use client";

import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";

export default function Loading() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      const increment = Math.floor(Math.random() * 41) + 10; // 10から50の間でランダム
      const newValue = prev + increment;
      return newValue > 100 ? 100 : newValue;
    };

    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
      {value < 100 ? (
        <p className="mt-4 text-lg text-gray-700">読み込み中... {value}%</p>
      ) : (
        <p className="mt-4 text-lg text-green-600">完了!</p>
      )}
    </div>
  );
}