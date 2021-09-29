import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  @Input() prov:any

  @Output() clickProvincia = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickProvincia.emit(this.prov.nombre)
  }

}
