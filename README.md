# weather-app

<div align="center">
  <img width="1920" height="914" alt="화면 캡처 2026-01-15 193336" src="https://github.com/user-attachments/assets/8cf9c3db-c2bd-417a-bcac-a4a2e58b24d7" />
</div>

Open Weather Map의 One Call API와 카카오의 로컬 API를 이용하여 지역별 날씨 정보를 제공하는 웹 애플리케이션입니다. 
사용자 흐름은 홈페이지(현재위치) -> 검색 -> 상세페이지(지역별) -> 즐겨찾기로 이어지며, 매끄러운 경험과 시각적 만족감을 주는 것에 중점을 두어 개발했습니다.
과제 수행에서 주요했던 포인트는 '사용자 흐름 및 경험', '로딩 및 페이지 전환', '전역 상태 관리'입니다.

## 실행 방법

본 프로젝트는 외부 Open API(OpenWeather, Kakao Local)를 사용하므로
로컬 실행을 위해 개인 API 키 설정이 필요합니다.

### 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성한 뒤, 아래 값을 입력하고, 키를 추가해주세요.

```bash
# OpenWeather API BASE URL
VITE_OWM_BASE_URL=https://api.openweathermap.org
# OpenWeather One Call API KEY
VITE_OWM_KEY=
# KAKAO API BASE URL
VITE_KAKAO_BASE_URL=https://dapi.kakao.com
# KAKAO REST API KEY
VITE_KAKAO_REST_KEY=
```
> ⚠️**Vite**에서는 환경 변수 이름이 반드시 `VITE_`로 시작해야 클라이언트 코드에서 접근할 수 있습니다.  

### API 키 발급 방법

- OpenWeather API
  - https://openweathermap.org/api
  - One Call API 사용
- Kakao Local API
  - https://developers.kakao.com/docs/latest/ko/tutorial/start
  - REST API 키 사용


