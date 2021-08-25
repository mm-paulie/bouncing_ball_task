import { GSDevTools } from 'gsap/dist/GSDevTools';
import config from "richmediaconfig";

export default class Banner {

  constructor(config) {

    // add required components here
    this.config = config;
  }

  async init() {


    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.video = document.body.querySelector('.video1');
    this.ended = false;

    this.video.addEventListener('loadedmetadata', this.loadedMetaDataHandler);
    this.video.addEventListener('play', this.videoPlayHandler);
    this.video.addEventListener('ended', this.videoEndedHandler);
  }

  loadedMetaDataHandler  ()  {
    this.canvas = document.getElementById('canvas');
    this.video = document.body.querySelector('.video1');

    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
  }

  videoPlayHandler  = () => {
    gsap.ticker.fps(30);
    gsap.ticker.add(this.draw);
  }

  videoEndedHandler = () => {
    this.ended = true;
    gsap.ticker.remove(this.draw);
  }

  draw = () => {
    this.video = document.body.querySelector('.video1');
    this.ctx.drawImage(this.video, 0, 0);
  }

  setAnimation(animation){
    this.animation = animation;
  }

  handleExit = () => {
    this.animation.getTimeline().progress(1);
  };

  /**
   * When client clicks this function will be triggerd.
   */
  handleClick = () => {
    this.handleExit();
  };

  /**
   * When mouse rolls over unit.
   */
  handleRollOver = () => {

  };

  /**
   * When mouse rolls out unit.
   */
  handleRollOut = () => {

  };

  async start() {
    await this.init();

    this.animation.play();
  }
}

