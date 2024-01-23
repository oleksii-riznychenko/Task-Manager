import {JSX, useMemo} from "react";
import {TaskTableConfig, TaskTableProps} from "./TaskTable.types";
import {IStatus} from "../../models/IStatus";
import {TaskCard} from "../TaskCard/TaskCard";
import "./TaskTable.scss";

export const TaskTable = ({tasks}: TaskTableProps): JSX.Element => {
  const config: TaskTableConfig = useMemo(() => [
    {
      title: IStatus.TODO,
      tasks: tasks.filter(task => task.status === IStatus.TODO)
    },
    {
      title: IStatus.IN_PROGRESS,
      tasks: tasks.filter(task => task.status === IStatus.IN_PROGRESS)
    },
    {
      title: IStatus.DONE,
      tasks: tasks.filter(task => task.status === IStatus.DONE)
    },
  ], [tasks])

  return (
    <div className='task-table'>
      {config.map(item => (
        <div key={item.title} className='task-table__col'>
          <p className='task-table__title'>{item.title}</p>
          <div className='task-table__body'>
            {item.tasks.map(task => (<TaskCard key={task.id} task={task} />))}
          </div>
        </div>
      ))}
    </div>
  )
}
