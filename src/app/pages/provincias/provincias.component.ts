import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  provincias:any[] = []

  suscriber:any

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.suscriber = this.dataService.getProvincias().subscribe((response:any) => {
      this.provincias = response.provincias

    })
  }

  ngOnDestroy(): void {
    this.suscriber.unsuscribe()
  }

  escuchaProvincia(nombre:string): void {
    console.log("Provincia de ",nombre)
  }

}
