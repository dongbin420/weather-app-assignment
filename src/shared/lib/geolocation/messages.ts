export const mapGeoErrorToMessage = (err: GeolocationPositionError) => {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      return '위치 권한이 거부되었습니다. 브라우저 및 디바이스 설정에서 위치 권한을 허용해 주세요.';
    case err.POSITION_UNAVAILABLE:
      return '현재 위치를 확인할 수 없습니다. 네트워크/GPS 상태를 확인해 주세요.';
    case err.TIMEOUT:
      return '위치 확인 시간이 초과되었습니다. 다시 시도해 주세요.';
    default:
      return '위치 확인 중 알 수 없는 오류가 발생했습니다.';
  }
};
