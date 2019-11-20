import { Component, OnInit } from '@angular/core';
import { TodoserService } from '../todoser.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tododesc',
  templateUrl: './tododesc.component.html',
  styleUrls: ['./tododesc.component.css']
})
export class TododescComponent implements OnInit {

  id: number;
  listss =[];
  newtodo : any;
  name: any;
  des:any;
  constructor( private todoService: TodoserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(paramId => {
        this.id = paramId.id;
    });

    this.newtodo = this.todoService.listss.filter(li => li.id == this.id);
    console.log(this.newtodo)
    this.name = this.newtodo[0].listitem;
   /*  this.getTodoId(this.id); */

   this.des = this.newtodo[0].des.text1;
   console.log(this.newtodo)
  }
  saveDesc(){
    this.newtodo[0].des = this.tododesc.value;
  
  }
 
  tododesc = new FormGroup({
    text1 : new FormControl("")
  });
 /*  getTodoId(id)
  {
    this.listss = this.todoService.listss.filter(li => li.id !== id)
    console.log(this.listss)
  } */

}
