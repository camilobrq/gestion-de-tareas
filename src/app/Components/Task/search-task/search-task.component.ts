import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseStatus } from 'src/app/Models/response-status';
import { AuthService } from 'src/app/Services/auth-service';
import { taskService } from 'src/app/Services/task-service';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) set setPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  tasks: any[] = [];
  query = '';
  selectedPriority: string = ''; 
  role: string = ''; 
  constructor(private taskService: taskService, private user: AuthService) { }

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
            this.tasks = data;
          }
        }
      })
    }else{
      this.taskService.getTaskList().subscribe({
        next: ({ data, message }) => {
          if (message === ResponseStatus.Successful && data) {
            this.dataSource.data = data;
            this.tasks = data;
          }
        }
      })
    }
    
  }

  search() {
    this.tasks = [];
    this.dataSource.data.forEach(element => {
      if (element.taskTitle.includes(this.query)) {
        this.tasks.push(element);
      }
    });
  }
  getColorClass(state: string): string {
    switch (state) {
      case 'Earring':
        return 'Earring-color';
      case 'Initiated':
        return 'Initiated-color';
      case 'In progress':
        return 'in-progress-color';
      case 'Finalized':
        return 'Finalized-color';
      // Agrega más casos según tus estados
      default:
        return ''; // Color predeterminado o ninguno
    }
  }
}
