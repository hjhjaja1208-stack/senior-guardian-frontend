import React from "react";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-yellow-100 p-8">
      <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-8">
        📘 금융 교육 가이드
      </h2>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {/* 인터넷 뱅킹 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">💻 인터넷 뱅킹</h3>
          <p className="text-xl mb-4">
            은행 앱 또는 웹사이트에 로그인하는 방법을 단계별로 안내합니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=영상링크1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
          >
            학습하러 가기
          </a>
        </div>

        {/* 모바일 결제 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-green-800 mb-4">📱 모바일 결제</h3>
          <p className="text-xl mb-4">
            카카오페이, 네이버페이 등 간편결제 서비스를 안전하게 사용하는 방법을 설명합니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=영상링크2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-green-700 transition"
          >
            학습하러 가기
          </a>
        </div>

        {/* ATM/키오스크 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">🏧 ATM/키오스크</h3>
          <p className="text-xl mb-4">
            현금 인출, 입금, 공과금 납부 등 ATM과 키오스크 사용법을 영상과 함께 안내합니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=영상링크3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-purple-700 transition"
          >
            학습하러 가기
          </a>
        </div>
      </div>
    </div>
  );
}