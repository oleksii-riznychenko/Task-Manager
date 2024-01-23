import {IStatus} from "./IStatus";

export interface ITask {
  id: number;
  title: string;
  status: IStatus;
  description: string;
}

export interface ITaskCreate {
  title: string;
  status: IStatus;
  description: string;
}

