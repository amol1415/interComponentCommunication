import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  public parent: any = [{
    name: "Krishna",
    age: "Forever",
    Village: "Vaikunth"
  }]

  viewChildToParent() {
    return this.parent;
  }
}
