import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NxNico123xyLibService } from './nx-nico123xy-lib.service';

@Component({
  selector: 'nx-nx-nico123xy-lib',
  template: `
    <img *ngIf="postUrl$ | async as src" [src]="src"/>
  `,
  styles: [
    `
    :host {
      display:inline-block;
      overflow:hidden;
      line-height: 0;
    }
    `
  ]
})
export class NxNico123xyLibComponent implements OnInit {

  constructor(private service:NxNico123xyLibService) { }

  @Input()
  id:number|any

  postUrl$:Observable<string>|any

  ngOnInit(): void {
    this.postUrl$ = this.service.getShow(this.id ?? 0).pipe(
      map((show:any) => show.image.medium)
    )
  }
}
