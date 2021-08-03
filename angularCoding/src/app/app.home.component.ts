import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TextBoxComponent } from "./shared/app.textbox.component";

@Component(
{
selector:'home-app',
templateUrl:'./app.home.component.html'
}
)
export class HomeComponent implements OnInit,AfterViewInit
{
    name:any;
    @ViewChild(TextBoxComponent) childcompo:TextBoxComponent;
    ngOnInit(): void {
        //var name=this.routeparams.paramMap[";
        this.name=this.routeparams.snapshot.queryParamMap.get('Name');
    }
    constructor(private routeparams:ActivatedRoute) {
        
            this.childcompo=new TextBoxComponent();
    }
    ngAfterViewInit(): void {
        this.childcompo.textvalueParent="updated in paremaad";
    }
    onchildclick(name:any)
    {
this.name=name;
this.childcompo?.setvalue("updated in parent");
console.log(this.childcompo);
    }

}