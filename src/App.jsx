import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const checkMessage = async () => {
    const res = await fetch("http://172.20.10.6:5000/api/check-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });
    const data = await res.json();
    setResult(data);
  };

  // ✅ 안드로이드 뒤로가기 버튼 처리
  useEffect(() => {
    const backHandler = CapacitorApp.addListener("backButton", () => {
      if (window.location.pathname !== "/") {
        // 홈이 아니면 → 홈으로 이동
        navigate("/");
      } else {
        // 홈이면 → 앱 종료
        CapacitorApp.exitApp();
      }
    });

    return () => {
      backHandler.remove();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        시니어 금융 안전 지킴이 🛡️
      </h1>

      <textarea
        className="w-full max-w-md border p-3 rounded mb-4 text-lg"
        rows="4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="받은 메시지를 입력하세요..."
      />

      <button
        onClick={checkMessage}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700"
      >
        검사하기
      </button>

      {result && (
        <div
          className={`mt-6 px-6 py-4 rounded-lg text-2xl font-bold ${
            result.risk === "위험"
              ? "bg-red-600 text-white"
              : result.risk === "주의"
              ? "bg-yellow-400 text-black"
              : "bg-green-400 text-black"
          }`}
        >
          결과: {result.risk}
        </div>
      )}
    </div>
  );
}

export default App;