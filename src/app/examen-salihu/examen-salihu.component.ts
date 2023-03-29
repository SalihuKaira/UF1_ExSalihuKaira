import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examen-salihu',
  templateUrl: './examen-salihu.component.html',
  styleUrls: ['./examen-salihu.component.css']
})
export class ExamenSalihuComponent {

  constructor(private http: HttpClient) {
    this.post_ex1();
    this.post_ex2();
    this.post_ex3();
  }

  post_ex1() {
    this.http.post("http://localhost:3020/api/ex1", {}).subscribe();
  }

  post_ex2() {
    this.http.post("http://localhost:3020/api/ex2", {}).subscribe();
  }

  post_ex3() {
    this.http.post<any>("http://localhost:3020/api/ex3", {}).subscribe();

  }
}
