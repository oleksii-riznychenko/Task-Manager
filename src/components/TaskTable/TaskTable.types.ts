import {ITask} from "../../models/ITask";
import {IStatus} from "../../models/IStatus";

export interface TaskTableProps {
  tasks: ITask[]
}

export type TaskTableConfig =  {title: IStatus, tasks: ITask[]}[]
