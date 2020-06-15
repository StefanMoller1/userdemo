import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const logger = createLogger();
const middlewares = [thunk, logger];
function initStore() {
  return createStore(rootReducers, applyMiddleware(...middlewares));
}

export function useStore() {
  const store = useMemo(() => initStore());
  return store;
}
