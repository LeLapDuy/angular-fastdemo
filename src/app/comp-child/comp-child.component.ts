import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.css']
})
export class CompChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() nn:string='';

  private _fatherName = '';
  @Input()
  set fatherName(name:string){
    if(name==='Dinh'){
      name += ' Duong'
    }
    this._fatherName = name;
  }

  get name():string{
    return this._fatherName;
  }

}