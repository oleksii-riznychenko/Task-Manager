import {ITask} from "../../models/ITask";

export interface TaskActionModalTypes {
  show: boolean;
  initialValues?: ITask;
  handleClose: () => void;
}
