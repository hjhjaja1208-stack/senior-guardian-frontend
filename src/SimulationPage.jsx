import React, { useState, useEffect } from "react";

export default function SimulationPage() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");

  // ✅ 컴포넌트가 처음 로드될 때 DB에서 영상 목록 불러오기
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("https://senior-guardian-app.onrender.com/simulations");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
          setCurrentVideo(data[0].url); // 첫 번째 영상 자동 재생
        }
      } catch (err) {
        console.error("❌ 영상 불러오기 실패:", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <h2 className="text-4xl font-extrabold text-green-900 text-center mb-8">
        🎥 가상 금융 사기 시뮬레이션
      </h2>

      {/* 영상 버튼 목록 */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideo(video.url)}
            className="bg-green-600 text-white text-2xl font-bold px-8 py-5 rounded-2xl shadow-lg hover:bg-green-700 transition"
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* 선택한 영상 표시 */}
      {currentVideo ? (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4">
          <iframe
            width="100%"
            height="480"
            src={currentVideo}
            title="시뮬레이션 영상"
            className="rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-2xl">
          불러올 영상이 없습니다.
        </p>
      )}
    </div>
  );
}