import React, { useState } from "react";

export default function FamilyPage() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  // ✅ DB 저장
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/save-family`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      console.error(err);
      setStatus("❌ 저장 오류");
    }
  };

  // ✅ 문자 전송
  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-sms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: phone, // 입력된 전화번호
          message: "🚨 가족 알림: 위험 메시지가 탐지되었습니다!",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ 문자 전송 성공!");
      } else {
        setStatus("❌ 전송 실패: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ 오류 발생");
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 p-8">
      <h2 className="text-4xl font-extrabold text-purple-900 text-center mb-8">
        👨‍👩‍👦 가족 연동 서비스
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
        <form className="flex flex-col gap-6">
          <label className="text-2xl font-bold">가족 전화번호 입력</label>
          <input
            type="text"
            placeholder="예: +821012345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-4 border-purple-400 rounded-xl p-5 text-2xl focus:ring-4 focus:ring-purple-300"
            required
          />

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex-1 bg-yellow-500 text-white font-bold text-2xl py-5 rounded-xl hover:bg-yellow-600 transition"
            >
              📌 저장하기
            </button>
            <button
              onClick={handleSend}
              className="flex-1 bg-purple-600 text-white font-bold text-2xl py-5 rounded-xl hover:bg-purple-700 transition"
            >
              📩 문자 보내기
            </button>
          </div>
        </form>

        {status && <p className="mt-6 text-xl font-bold text-center">{status}</p>}
      </div>
    </div>
  );
}