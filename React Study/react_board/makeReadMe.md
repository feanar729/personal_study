# 해결 사항

- [x] Create 제작
- [ ] Update 제작
- [ ] Read 제작
- [ ] Delete 제작
- [x] API 받기
- [ ] ReactRouter (Refactoring 단계)
- [ ] CSS 적용

Q: API 다양하게 있던데 게시판은 어느정도로 기능제작을 해야할까??? 일단 CRUD정도로 진행해보려 하고 있음..
A: CRUD 진행후 다른 기능도 만들어보기

Q: 현재 boardList를 API로 받아서 파싱된 데이터를 state에 적용하고 그 내용을 뿌리려고 하는데 state에 어떻게 데이터를 push해야 좋을까요?
A: setState활용해서 할것 그전에 componentWillMount 등의 라이프 사이클을 잘 활용할 것

Q: 비동기로 받아오는 데이터가 렌더링 과정에서 받아오지 못하는 이슈가 있음 어떻게해결?
A: fetch .then을 받아오면서 비동기 처리과정으로 setState에서 받아오지 못함 그래서 setState의 다음인자로 해당 값을 동기처럼 처리하게 넣어두는 걸로 해결 