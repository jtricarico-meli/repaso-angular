import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes:any[]=[];

  suscriber:any

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.suscriber = this.dataService.getPosts().subscribe((posts:any) => {
      this.mensajes = posts
      console.log("Posts: ",posts)
    })
  }

  ngOnDestroy(): void {
    this.suscriber.unsuscribe()
  }

  escuchaClick(id:Number): void{
    console.log("Click en post id: ",id)
  }

}
