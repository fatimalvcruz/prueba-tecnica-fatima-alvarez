import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../_services/caft-fact.services';
import { GifService } from '../_services/gif.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.scss']
})
export class ShowCatComponent implements OnInit {
  catFact: string = "";
  error: boolean = false;
  message: string = "Hay un error en la carga";
  loading: boolean = true;
  catGiph: string = '';

  constructor(private catServicio: CatFactService, private gifServicio: GifService ) { 
  }


  ngOnInit(): void {
    this.runApp();
  }

  runApp(){
    this.catServicio.getCatfact().subscribe({
      next:(respuesta: any) => {
        this.catFact = respuesta.fact;
        let firstThreeWords = this.catFact.split(' ').slice(0, 3).join(" ");
        this.getGiftUrl(firstThreeWords);
      },
      error:(respuesta: Response) =>{
        this.error = true;
      }
  });
 
  }

  getGiftUrl(_firstThreeWords: string){
    this.gifServicio.getGiphbySearch(_firstThreeWords).subscribe({
      next:(respuesta:any) =>{
        this.catGiph = respuesta.data[0].images.original.url;
        this.loading = false;
        console.log(this.catGiph);
      },
      error:(respuesta: Response) =>{
        this.error = true;
      }
    });
  }

  refresh(){
    this.loading = true;
    this.runApp();


    
  }
 

  
  


}




