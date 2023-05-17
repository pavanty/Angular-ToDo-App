import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss'],
})
export class EditdataComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ) {}
  idparamater: any;
  tododetail: any;
  stringobj: any = {};

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.idparamater = params.get('id');
      this.service.getdatabyid(this.idparamater).subscribe((data) => {
        this.tododetail = data;
        this.stringobj = JSON.parse(this.tododetail);
      });
    });
  }

  onsubmit() {
    this.service
      .updatedata(this.idparamater, this.stringobj)
      .subscribe((data) => {
        this.router.navigate(['/Todoapp']);
      });
  }
}
