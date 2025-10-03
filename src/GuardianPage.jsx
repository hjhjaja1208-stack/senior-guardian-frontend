import React, { useState } from "react";

export default function GuardianPage() {
  const [message, setMessage] = useState(""); // 입력한 메시지
  const [result, setResult] = useState("");   // 검사 결과
  const [reportValue, setReportValue] = useState(""); // 신고 값
  const [reportType, setReportType] = useState("phone"); // 신고 타입
  const [reportStatus, setReportStatus] = useState("");  // 신고 상태

  // ✅ 메시지 검사
  const checkMessage = async () => {
    try {
      const res = await fetch("http://172.20.10.6:5000/api/check-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }), // message 그대로 보냄
      });
      const data = await res.json();

      if (data.risk === "위험") {
        setResult("🚨 위험한 메시지입니다!");
      } else if (data.risk === "주의") {
        setResult("⚠️ 주의가 필요한 메시지입니다.");
      } else {
        setResult("✅ 안전한 메시지로 보입니다.");
      }
    } catch (err) {
      console.error(err);
      setResult("❌ 검사 오류 발생");
    }
  };

  // ✅ 사용자 신고
  const submitReport = async () => {
    try {
      const res = await fetch("http://172.20.10.6:5000/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: reportType, value: reportValue }),
      });
      const data = await res.json();
      setReportStatus(data.message);
    } catch (err) {
      console.error(err);
      setReportStatus("❌ 신고 오류 발생");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
        📡 실시간 사기 필터링
      </h2>

      {/* 메시지 검사 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto mb-10">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-40 border-4 border-blue-500 rounded-xl p-4 text-2xl"
          placeholder="받은 메시지를 입력하세요..."
        />
        <button
          onClick={checkMessage}
          className="mt-6 w-full bg-red-600 text-white py-5 rounded-xl"
        >
          검사하기
        </button>
        {result && <div className="mt-6 text-2xl">{result}</div>}
      </div>

      {/* 사용자 신고 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">🚨 사기 번호/URL 신고하기</h3>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border-2 p-3 rounded-lg mr-3"
        >
          <option value="phone">전화번호</option>
          <option value="url">URL</option>
        </select>
        <input
          type="text"
          placeholder="신고할 값을 입력하세요"
          value={reportValue}
          onChange={(e) => setReportValue(e.target.value)}
          className="border-2 p-3 rounded-lg w-2/3"
        />
        <button
          onClick={submitReport}
          className="ml-3 bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          신고하기
        </button>
        {reportStatus && (
          <p className="mt-4 text-green-600 font-bold">{reportStatus}</p>
        )}
      </div>
    </div>
  );
}