import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center">
        👵 시니어 금융 안전 지킴이
      </h1>

      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
        <Link
          to="/guardian"
          className="bg-blue-700 text-white text-2xl md:text-3xl font-bold py-6 rounded-2xl shadow-lg hover:bg-blue-800 transition text-center"
        >
          📡 실시간 사기 필터링
        </Link>
        <Link
          to="/simulation"
          className="bg-green-600 text-white text-2xl md:text-3xl font-bold py-6 rounded-2xl shadow-lg hover:bg-green-700 transition text-center"
        >
          🎥 가상 시뮬레이션
        </Link>
        <Link
          to="/education"
          className="bg-yellow-500 text-white text-2xl md:text-3xl font-bold py-6 rounded-2xl shadow-lg hover:bg-yellow-600 transition text-center"
        >
          📘 금융 교육
        </Link>
        <Link
          to="/family"
          className="bg-purple-600 text-white text-2xl md:text-3xl font-bold py-6 rounded-2xl shadow-lg hover:bg-purple-700 transition text-center"
        >
          👨‍👩‍👦 가족 연동
        </Link>
      </div>
    </div>
  );
}