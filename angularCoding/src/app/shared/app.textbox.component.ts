import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-textbox',
    templateUrl:'./app.textbox.component.html',
    styleUrls: ['../app.component.css']
})
export class TextBoxComponent implements OnInit
{
    @Input() textvalue?:string;
     textvalueParent?:string;
    @Output() buttonClick=new EventEmitter<string>(); 
    constructor() {
            
    }
    ngOnInit(): void {
    }
    navigateWithPassword()
    {
        this.buttonClick.emit(this.textvalue);
    }
    setvalue(t:any)
    {
        this.textvalue=t;
        console.log(this.textvalue);
        console.log(t);
    }

}
