import {combineReducers, configureStore} from '@reduxjs/toolkit'
import tasks from './reducers/tasks/TasksSlice'

const rootReducer = combineReducers({
  tasks,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
