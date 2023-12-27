import { Component, ViewChild } from '@angular/core';
import { TaskModel } from 'src/app/Models/TaskModel';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { taskService } from 'src/app/Services/task-service';
import { ResponseStatus } from 'src/app/Models/response-status';
import { SnackBar } from 'src/app/Helper/Snaback';
import { AuthService } from 'src/app/Services/auth-service';

@Component({
  selector: 'app-management-task',
  templateUrl: './management-task.component.html',
  styleUrls: ['./management-task.component.css']
})
export class ManagementTaskComponent {
  rowData: any = [];
  listEvent: TaskModel[] = []
  processing: boolean = false;
  dataSource = new MatTableDataSource<TaskModel>();
  pageSizeOptions: number[] = [15, 30];
  displayedColumns: string[] = ['taskTitle', 'description', 'state', 'priority', 'actions'];
  showModal: boolean = false;
  showModalRegistro: boolean = false;
  role: string = "";
  userId: string = "";
  @ViewChild(EditTaskComponent) editTaskComponent!: EditTaskComponent;

  @ViewChild(MatPaginator) set setPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  get showPaginator() {
    return this.dataSource.data.length > Math.min(...this.pageSizeOptions);
  }
  constructor(private route: Router, private taskService: taskService, private snaback: SnackBar, private user: AuthService) { }
  ngOnInit(): void {
    this.role = this.user?.user?.userInfo?.role ?? 'employee';
    this.getDataTask();
  }
  getDataTask() {
    const userId = this.user?.user?.userInfo?.userId;
    if (this.role == 'employee') {
      this.taskService.getTasksForUser(userId).subscribe({
        next: ({ data, message }) => {
          if (message === ResponseStatus.Successful && data) {
            this.dataSource.data = data;
          }
        }
      })
    }
    else {
      this.taskService.getTaskList().subscribe({
        next: ({ data, message }) => {
          if (message === ResponseStatus.Successful && data) {
            this.dataSource.data = data;
          }
        }
      })
    }
  }
  deleteTask(event: string) {
    this.taskService.DeleteTask(event).subscribe({
      next: ({ message }) => {
        if (message === ResponseStatus.Successful) {
          this.snaback.showSuccess("Task deleted successfully"!);
          this.getDataTask();
        } else {
          this.snaback.showError(message);
        }
        this.processing = false;
      },
    })
  }


  editTask(element: any): void {
    this.rowData = {
      idTask: element.idTask,
      taskTitle: element.taskTitle,
      description: element.description,
      state: element.state,
      priority: element.priority,
    };
    this.showModal = true;

  }
  registrarTask() {
    this.showModalRegistro = true;
  }
}
