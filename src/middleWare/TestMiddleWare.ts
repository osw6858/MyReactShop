const TestMiddleWare = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("next", next);
  console.log("action", action);
  console.log("getState", store.getState());
  return next(action);
};

export default TestMiddleWare;

//테스트용 미들웨어 - 프로젝트에 적용하진 않음
