# weather-app

<div align="center">
  <img width="1920" height="914" alt="화면 캡처 2026-01-15 193336" src="https://github.com/user-attachments/assets/8cf9c3db-c2bd-417a-bcac-a4a2e58b24d7" />
</div>

- Open Weather Map의 One Call API와 카카오의 로컬 API를 이용하여 지역별 날씨 정보를 제공하는 웹 애플리케이션입니다. 
- 사용자 흐름은 홈페이지(현재위치) -> 검색바 -> 상세페이지(지역별) -> 즐겨찾기페이지로 이어지며, 매끄러운 경험과 시각적 만족감을 주는 것에 중점을 두어 개발했습니다.
- 과제 수행에서 주요했던 포인트는 '사용자 흐름 및 경험', '로딩 및 페이지 전환', '전역 상태 관리'입니다.

## 기술 스택

<img src="https://img.shields.io/badge/node-v22.18.0-brightgreen.svg?style=flat-square" title="px(픽셀) 크기 설정" alt="node"></img>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/TanStack_Query-FF4154.svg?style=flat-square&logo=reactquery&logoColor=white" alt="TanStack Query" />
<img src="https://img.shields.io/badge/Zustand-5A29E4.svg?style=flat-square&logo=zustand&logoColor=white" alt="Zustand" />
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=axios&logoColor=white" alt="Axios" />

## 실행 방법

본 프로젝트는 외부 Open API(OpenWeather, Kakao Local)를 사용하므로
로컬 실행을 위해 개인 API 키 설정이 필요합니다.

### 1. 환경변수 설정

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

### 2. API 키 발급 방법

- OpenWeather API
  - https://openweathermap.org/api
  - One Call API 사용
- Kakao Local API
  - https://developers.kakao.com/docs/latest/ko/tutorial/start
  - REST API 키 사용

### 3. 프로젝트 실행

```bash
npm install
npm run dev
```

## 구현한 기능(요구사항)

| 구분 | 요구사항 | 구현 |
|---|---|---:|
| 홈페이지 | 사용자의 현재 위치를 감지하여 날씨 정보 제공 | ✅ |
| 상세페이지 | 검색과, 즐겨찾기에서 선택된 지역의 날씨 정보를 제공하는 상세페이지 구현. | ✅ |
| 검색 | 연관성 높은 순으로 모든 행정구역 단위의 지역명 검색 지원 | ✅ |
| 검색 | 검색어 클릭시 상세페이지로 이동, 날씨 정보 제공 | ✅ |
| 즐겨찾기 | 상세페이지, 검색리스트, 즐겨찾기페이지 내에서 해당 지역 즐겨찾기 추가, 삭제 기능 제공 | ✅ |
| 즐겨찾기 | 피드백 토스트 UI 구현(즐겨찾기 6개 제한 및 추가, 삭제시) | ✅ |
| 즐겨찾기 | 즐겨찾기 추가한 장소들 즐겨찾기 페이지에 카드 UI 형태로 제공(날씨 정보 포함) | ✅ |
| 즐겨찾기 | 상세페이지, 즐겨찾기 페이지 내에서 장소 별칭 수정 기능 제공 | ✅ |
| 즐겨찾기 | 상세페이지, 검색리스트, 즐겨찾기페이지 내에서 변경된 이름 및 기본 이름 동시 적용 | ✅ |
| 즐겨찾기 | 즐겨찾기 카드 클릭시 상세페이지로 이동, 날씨 정보 제공 | ✅ |
| 즐겨찾기 | 즐겨찾기 이름 변경 모달 및 삭제 확인 모달UI 구현 | ✅ |
| 전체 | 홈페이지, 상세페이지의 배경 이미지를 현재 장소의 날씨에 따라 동적으로 적용(맑음, 비, 눈, 흐림, 천둥) | ✅ |
| 전체 | 모든 페이지에서 장소의 날씨 정보가 없는 경우, “해당 장소의 정보가 제공되지 않습니다.” UI 명시 | ✅ |
| 개발 | FSD 아키텍처 사용 | ✅ |
| 개발 | 모든 디바이스에 대응하는 반응형 구현 | ✅ |


## 기술적 의사결정 및 이유

### 1. 사용자 흐름 및 전역상태 설계
**문제**
- 주어진 요구사항이 모호한 부분들이 있어서, 매끄러운 사용자 흐름을 위해 고민이 필요했습니다.

**의사 결정 및 이유**
- 검색어 선택시, 날씨 정보를 보여줄 곳이 요구사항에 명시되어 있지 않았습니다.
- 만약에, 검색어 리스트에서 바로 날씨 정보를 보여준다면 쿼리 실행으로 인해 지연이생겨 사용자 흐름을 방해한다고 판단하여
상세페이지로 이동하도록 구현했습니다.
- 또한, 즐겨찾기의 카드는 데이터의 첫 출처가 검색 JSON 데이터이기 때문에, 검색-즐겨찾기 카드-상세페이지가 같은 데이터를 공유하도록 설계하는 것이
논리적으로도 적합하다고 판단했습니다.
- 따라서, Zustand를 활용하여 즐겨찾기 데이터를 전역상태로 관리했고 검색-상세페이지-즐겨찾기 카드 모든 곳에서 추가, 삭제, 변경 및
읽기가 가능하도록 구현했습니다.

 ### 2. 리액트 쿼리를 활용한 캐싱 전략 및 로딩 처리
 **문제 1**
- 좌표(현재위치) -> 지명, 지명 -> 좌표, 좌표 -> 날씨 정보, 이렇게 세가지 종류의 데이터 페칭이 필요했습니다.
따라서, 페이지 전환간 페칭이 자주 일어날 것이고 캐싱을 활용하지 않으면 잦은 재페칭으로 인한
비용적, 성능적 문제가 클 것이라 판단했습니다.

 **의사 결정 및 이유**
- useOneCallQuery는 실시간성이 중요한 날씨 데이터이기 때문에, staleTime을 1분으로 하여
사용자가 웹사이트를 이용하는 짧은 시간 동안은 캐시된 정보를 보여주고 사용의 텀이 생길때만 재페칭을 통해 업데이트하도록 했습니다.
- useCoordToLabelQuery, useLabelToCoordQuery는 좌표와 지명 즉, 고정된 데이터
이기 때문에 staleTime을 1시간으로 하여 웹사이트를 사용하는 동안은 캐시 데이터를 사용하여 재페칭을 방지하도록 했습니다.  

 **문제 2**
- isLoading을 이용해 로딩처리를 했음에도 불구하고 로딩시, 쿼리 데이터가 undefined 인채로 페이지가 깜빡이는
현상이 일어났습니다.

 **의사 결정 및 이유**
- undefined가 되는 이유를 디버깅한 결과, 좌표가 NaN가 되는 시점에
enabled로 쿼리 실행을 방지했음에도, 컴포넌트 렌더링은 정상적으로 진행되는 것이 원인이었습니다.
- 따라서, enabled의 조건을 로딩 조건에 포함하여 문제 시점에 로딩 스피너가 보이도록 처리하여 로딩 경험을 개선했습니다.

  


