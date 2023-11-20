export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

export interface ITaskForm {
  title?: string;
  description?: string;
  dueDate?: string;
  completed?: boolean;
}
