import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import Hls from 'hls.js';

@Component({
  selector: 'app-section-live',
  templateUrl: './section-live.component.html',
  styleUrls: ['./section-live.component.scss']
})
export class SectionLiveComponent implements OnInit{
private hls = new Hls();
public user: string | null="HOME";
private play:boolean = false;

@ViewChild('video', {static:true}) private readonly video:ElementRef<HTMLVideoElement> | any;

constructor(private route: ActivatedRoute){}

public ngOnInit(){
  this.user=this.route.snapshot.paramMap.get('user') || 'ALEX';

  this.loadInit(`http://localhost:8000/live/${this.user}/index.m3u8`);
}

public loadInit(currentVideo:string): void{
  if (Hls.isSupported()){
    this.loadVideoWithHls(currentVideo)
  }else{
    console.log("no funciona el vidoe");
  }
}

private loadVideoWithHls(currentVideo: string){
  this.hls.loadSource(currentVideo);
  this.hls.attachMedia(this.video.nativeElement);
}

}
