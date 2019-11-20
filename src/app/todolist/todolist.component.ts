import { Component, OnInit } from '@angular/core';
import { TodoserService } from '../todoser.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  title = 'ToDoApp';
  id:number = this.todoService.listss.length || 0;

  

 /*  listss = [] */
 

  constructor(private todoService: TodoserService ){
  
  }

  /* deleteRow(id){
    for(let i = 0; i < this.listss.length; ++i){
        if (this.listss[i].id === id) {
            this.listss.splice(i,1);
        }
    }
} */

deleteRow(id: number)
{
  this.todoService.listss = this.todoService.listss.filter(lis => lis.id !== id).map((t,
    i) => {t.id = i+1; this.id = i+1; return t})
 /*  this.todoService.listss.forEach((el, i) => {
    if(el.id === id){
      this.todoService.listss.splice(i,1)
    }
  }); */
}

complete(id: number){
  this.todoService.listss.forEach((el, i) =>{
    if(el.id === id){
      if(!el.status){
        el.status =true;
      }
      else{
        el.status =false;
      }
    }
  }
  )};

  addTodo(value){ 
    let listObj={
      id:++this.id,
      listitem: value,
      status: false,
      des:String
    }

  
    

    
       
       this.todoService.listss.push(listObj);
       
       console.log(this.todoService.listss)
  }

/*   todo : string;
    clear(){
      this.todo = '';
    } */



  ngOnInit() {
  }

}
