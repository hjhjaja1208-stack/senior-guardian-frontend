// src/AppWrapper.jsx
import { App as CapApp } from "@capacitor/app";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AppWrapper({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    // 안드로이드 뒤로가기 버튼 이벤트 리스너
    CapApp.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back(); // 이전 페이지 있으면 뒤로가기
      } else {
        navigate("/"); // 없으면 앱 종료 대신 홈으로 이동
      }
    });
  }, [navigate]);

  return children;
}