/**
 * 배경 스크립트 (Service Worker 역할).
 *
 * 주요 기능:
 * 이벤트 기반 처리: 브라우저 이벤트(탭 업데이트, 설치 등) 감지.
 * 확장 프로그램 전반의 상태 관리: API 호출, 데이터 저장, 메시지 처리 등.
 */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed!');
});
