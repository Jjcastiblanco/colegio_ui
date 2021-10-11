import { Component, OnInit } from '@angular/core';
import { ColegioServiceService } from 'src/app/service/colegio-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  public teacher: any[] = [];
  public subjectTeacher: any[] = [];
  public id: string = "0";

  constructor( private subject:ColegioServiceService) { 

    this.subject.getTeacher()
    .subscribe((data:any) =>{
      this.teacher = data;  
    });
  }

  ngOnInit(): void {
  }

  private getTeacherSubject(teacherId: string){
    this.subject.getSubject(teacherId)
    .subscribe((data:any) =>{
      this.subjectTeacher = data.nombreAsignatura;
      console.log(this.subjectTeacher, "teacher");
    });
  }

  onCarrera(e :any) {
     this.getTeacherSubject(e.target.value);
  }
  
}
