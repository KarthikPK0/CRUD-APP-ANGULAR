import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allfruits: Fruit[] = [];
   constructor(private fruiteService:FruitService){}

   ngOnInit(): void {
     this.fruiteService.getAll().subscribe((data)=>{
       this.allfruits = data;
     })
   }

   handleDelete(id: number){
    this.fruiteService.delete(id).subscribe({
      next:(data) => {
        this.allfruits = this.allfruits.filter(_ =>_.id != id)
      }
    })

   }
}
