import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input() parent1: any;

  public parentData: any;
  ngOnInit() {
    console.log(this.parent1);
  }

  parentToChild() {
    console.log(this.parent1);
    this.parentData = this.parent1
  }



  // child to parent 

  public child: any = [{
    name: "Ram",
    age: "Forever",
    Village: "Ayodhya"
  }]

  @Output() child1 = new EventEmitter();

  childToParentData() {
    this.child1.emit(this.child)
  }
}
