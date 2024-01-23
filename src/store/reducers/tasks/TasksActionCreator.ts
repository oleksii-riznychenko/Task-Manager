import {createAsyncThunk} from '@reduxjs/toolkit';
import {taskApiService} from "../../../api/services/taskApiService";
import {ITask, ITaskCreate} from "../../../models/ITask";

export const createTask = createAsyncThunk<
  ITask[], ITaskCreate, { rejectValue: string }
>('tasks/createTask', async (data, {rejectWithValue}) => {
  try {
    return await taskApiService.createTask(data).then(res => res.data);
  } catch (e: unknown) {
    return rejectWithValue('An error occurred. Please try again later.');
  }
});

export const readTasks = createAsyncThunk<
  ITask[], void, { rejectValue: string }
>('tasks/readTasks', async (_, {rejectWithValue}) => {
  try {
    return await taskApiService.readTasks().then(res => res.data);
  } catch (e: unknown) {
    return rejectWithValue('An error occurred. Please try again later.');
  }
});

export const updateTask = createAsyncThunk<
  ITask[], ITask, { rejectValue: string }
>('tasks/updateTask', async (data, {rejectWithValue}) => {
  try {
    return await taskApiService.updateTask(data).then(res => res.data);
  } catch (e: unknown) {
    return rejectWithValue('An error occurred. Please try again later.');
  }
});

export const deleteTask = createAsyncThunk<
  ITask[], ITask, { rejectValue: string }
>('tasks/deleteTask', async (data, {rejectWithValue}) => {
  try {
    return await taskApiService.deleteTask(data).then(res => res.data);
  } catch (e: unknown) {
    return rejectWithValue('An error occurred. Please try again later.');
  }
});
