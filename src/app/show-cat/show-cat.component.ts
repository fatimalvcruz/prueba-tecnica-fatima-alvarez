import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../_services/caft-fact.services';
import { GifService } from '../_services/gif.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.scss']
})
export class ShowCatComponent implements OnInit {
  catFact: any = {};
  firstThreeWord: string = '';
  error: boolean = false;
  message: string = "Hay un error en la carga";
  loading: boolean | undefined;
  catGiph: any ;

  constructor(private catServicio: CatFactService, private gifServicio: GifService ) { 

  }


  ngOnInit(): void {
    this.loading = true;

    this.catServicio.getCatfact().subscribe({
      next:(respuesta: any) => {
        this.catFact = respuesta;
        this.loading = false;
        this.firstThreeWord = this.catFact.fact.split(' ').slice(0, 3).join(" ");
        this.hola();
        console.log(this.catFact.fact);
        console.log(this.firstThreeWord);

      },
      error:(respuesta: Response) =>{
        this.error = true;
      }
     
  });

  }

  hola(){
    this.gifServicio.getGiphbySearch(this.firstThreeWord).subscribe({
      next:(respuesta:any) =>{
        this.loading = false;
        this.catGiph = respuesta;
        console.log(this.catGiph.data[0].images.original.url);
  
      },
      error:(respuesta: Response) =>{
        this.error = true;
  
      }
    })
  

  }
 

  
  


}




