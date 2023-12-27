import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ServiceDataResponse } from "../Models/service-data-response";
import { ServiceResponse } from "../Models/service-response";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { TaskModel } from "../Models/TaskModel";
import { RequestTaskModel } from "../Models/requestTaskModel";
@Injectable({
  providedIn: 'root'
})
export class taskService {
    private urlApi= environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getTaskList() {
        return this.http.get<ServiceDataResponse<TaskModel[]>>(`${this.urlApi}TaskManagement/GetAllTask`);
    }
    registerTask(registerModel: RequestTaskModel): Observable<ServiceResponse> {
        return this.http.
        post<ServiceDataResponse<ServiceResponse>>(`${this.urlApi}TaskManagement/RegisterTask`, registerModel);
    }
    updateTask(updateModel: RequestTaskModel): Observable<ServiceResponse> {
        return this.http.
        put<ServiceDataResponse<ServiceResponse>>(`${this.urlApi}TaskManagement/UpdateTask`, updateModel);
        }
    DeleteTask(idRecipe: string): Observable<ServiceResponse> {
        return this.http.delete<ServiceDataResponse<ServiceResponse>>(`${this.urlApi}TaskManagement/DeleteTask?taskId=${idRecipe}`);
    }
    getTasksForUser(userId?:string) {
        return this.http.get<ServiceDataResponse<TaskModel[]>>(`${this.urlApi}TaskManagement/GetTasksForUser?userId=${userId}`);
    }
}
