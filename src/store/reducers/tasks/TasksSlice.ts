import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from "../../../models/ITask";
import {createTask, deleteTask, readTasks, updateTask} from "./TasksActionCreator";

export interface ConfigTasksState {
  loading: boolean;
  error: string | null;
  tasks: ITask[] | null;
}

const initialState: ConfigTasksState = {
  error: null,
  tasks: null,
  loading: true,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(readTasks.pending, state => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      readTasks.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.error = null;
        state.loading = false;
        state.tasks = action.payload || null;
      },
    );
    builder.addCase(
      readTasks.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.tasks = null;
        state.error = action.payload || 'An error occurred.';
      },
    );
    builder.addCase(deleteTask.pending, state => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      deleteTask.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.error = null;
        state.loading = false;
        state.tasks = action.payload || null;
      },
    );
    builder.addCase(
      deleteTask.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.tasks = null;
        state.error = action.payload || 'An error occurred.';
      },
    );
    builder.addCase(createTask.pending, state => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      createTask.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.error = null;
        state.loading = false;
        state.tasks = action.payload || null;
      },
    );
    builder.addCase(
      createTask.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.tasks = null;
        state.error = action.payload || 'An error occurred.';
      },
    );
    builder.addCase(updateTask.pending, state => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      updateTask.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.error = null;
        state.loading = false;
        state.tasks = action.payload || null;
      },
    );
    builder.addCase(
      updateTask.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.tasks = null;
        state.error = action.payload || 'An error occurred.';
      },
    );
  },
});

export default tasksSlice.reducer;
