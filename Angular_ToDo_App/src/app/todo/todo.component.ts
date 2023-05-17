import { routingcomponents } from './../app-routing.module';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tododatas: any;
  todopost: FormGroup;
  date = new Date();
  constructor(private service: ApiService, private router: Router) {}
  ngOnInit() {
    this.todopost = new FormGroup({
      date: new FormControl(this.date),
      title: new FormControl(null, Validators.required),
      ischecked: new FormControl(false),
    });
    this.getalldata();
  }

  getalldata() {
    this.service.readall().subscribe((datas) => {
      this.tododatas = datas;
    });
  }
  submitform() {
    this.service.postdata(this.todopost.value).subscribe((data) => {
      this.ngOnInit();
    });
  }
  deletebyid(id: number) {
    this.service.deletedata(id).subscribe((data) => {
 
      this.ngOnInit();
    });
  }

  checkcompleted(tododata: any) {
    tododata.ischecked = !tododata.ischecked;
    this.todopost = new FormGroup({
      ischecked: new FormControl(tododata?.ischecked),
    });

    this.service
      .updatedatachecked(tododata.id, this.todopost.value)
      .subscribe((data) => {
        this.ngOnInit();
      });
  }

  get title() {
    return this.todopost.get('title');
  }

  gotoeditcomponent(id: number) {
    this.router.navigate(['/edittodoapp', id]);
  }
}
