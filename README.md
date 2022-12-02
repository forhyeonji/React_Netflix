# 개인 프로젝트 영화 정보 사이트
영화에 대한 디테일한 정보를 얻고 추천 받을 수 있다

Axios를 통해 API를 요청하고 redux-toolkit으로 state를 다룸
(새로운 문법:createSlice, configureStore, dispatch)
react 훅과 react-bootstrap을 공부하기 좋았던 프로젝트

Demo : [https://hyeonji-netflix.netlify.app/](https://hyeonji-netflix.netlify.app/)

## 기능
[TMDB](https://www.themoviedb.org/) 에서 영화관련 API를 받아온다
인기순, 최신순, 추천순 분류(Sort)
유투브 영화예고편(Watch Trailer)
영화 제목 검색
영화 리뷰
관련된 영화 추천(Related Movies)
페이징

## 아쉬운 점
useContext 훅을 통한 filter 기능 구현 (대대적 리팩토링이 필요)
백과 연결하여 로그인 및 curd 기능 구현
시각적 효과가 부족함을 깨달음 (마우스 이벤트, 스크롤 이벤트)
