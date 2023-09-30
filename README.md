Cliente en angular para retrasmisión por streaming usando HLS,
Se utiliza las bibliotecas:
 npm i hls.js
npm i @types/hls.js

Se carga el video a través de esta función:
private loadVideoWithHls(currentVideo: string){
  this.hls.loadSource(currentVideo);
  this.hls.attachMedia(this.video.nativeElement);
}
