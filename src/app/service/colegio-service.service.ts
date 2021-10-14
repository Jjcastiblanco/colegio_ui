import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColegioServiceService {


  private url = "http://localhost:8080/";


  constructor(private http: HttpClient) {

   }

   getSubject(id: string){
     return this.http.get(this.url+`/Asignaturas/course/${id}`);
   }

   getTeacher(){
     return this.http.get(this.url+'/teacher/all')
   }
}
