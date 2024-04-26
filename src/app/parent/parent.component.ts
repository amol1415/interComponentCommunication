import { Component, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public parent: any = [{
    name: "Krishna",
    age: "Forever",
    Village: "Vaikunth"
  }]


  public ChildData: any;
  fetchChildData(data: any) {
    console.log(data);
    this.ChildData = data;
  }

  // viewChildData
  public viewData: any;
  @ViewChild(ViewchildComponent) view: any;

  dataFromViewChild() {
    this.view.viewChildToParent()
    // console.log(this.view);
    this.viewData = this.view
    console.log(this.viewData);
  }
}
