import axios, {AxiosResponse} from 'axios';
import {API_ENDPOINTS, BASE_API} from '../constants/apiConstants';
import {ITask, ITaskCreate} from '../../models/ITask';

// CRUD SERVICE
class TaskApiService {
  public async createTask(data: ITaskCreate): Promise<AxiosResponse<ITask[]>> {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_API}${API_ENDPOINTS.TASKS}`, data)
        .then((response: AxiosResponse<ITask[]>) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public async updateTask(data: ITask): Promise<AxiosResponse<ITask[]>> {
    return new Promise((resolve, reject) => {
      axios
        .put(`${BASE_API}${API_ENDPOINTS.TASKS}/${data.id}`, data)
        .then((response: AxiosResponse<ITask[]>) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public async readTasks(): Promise<AxiosResponse<ITask[]>> {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_API}${API_ENDPOINTS.TASKS}`)
        .then((response: AxiosResponse<ITask[]>) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public async deleteTask(data: ITask): Promise<AxiosResponse<ITask[]>> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_API}${API_ENDPOINTS.TASKS}/${data.id}`)
        .then((response: AxiosResponse<ITask[]>) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export const taskApiService = new TaskApiService();
