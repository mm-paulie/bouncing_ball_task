import { GSDevTools } from 'gsap/dist/GSDevTools';
import config from "richmediaconfig";

export default class Banner {

  constructor(config) {

    // add required components here
    this.config = config;
  }

  async init() {
    if (DEVELOPMENT) {
      // gsap.registerPlugin(GSDevTools);
      // GSDevTools.create({animation: this.animation.getTimeline(), globalSync: false});
    }
    this.vid = document.body.querySelector(".video1");
    if(!config.content.gsap.showVideo) {
      this.vid.style.opacity = 0;
    }


    if(config.content.gsap.syncVideo) {
      gsap.ticker.add(this.seekVideo);
    }

  }

  seekVideo = () => {
    // console.log(this.vid.currentTime);
    // console.log(this.vid.duration);
    this.vid.currentTime = (this.animation.getTimeline().time());
  }

  setAnimation(animation){
    this.animation = animation;
  }

  handleExit = () => {
    window.open(window.clickTag, '_blank');
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

