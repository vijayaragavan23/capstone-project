import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-details',
    templateUrl:'/details.html'
})
export class DetailsComponent{

    constructor(private router:Router){}
    order(){
        return this.router.navigate(['placeorder'])
    }

}