import config from "richmediaconfig";

export default class Banner {

  constructor(config) {

    // add required components here
    this.config = config;
  }

  async init() {
    this.vid = document.body.querySelector(".video1");
    this.banner = document.body.querySelector('.banner');
    this.buttonSwitch = document.body.querySelector('.button_switch');
    this.buttonSwitchCopy = document.body.querySelector('.button_switch_copy');
    this.showVideo = false;
    this.banner.classList.add('hideVideo');
    this.buttonSwitch.addEventListener('click', this.handleClick);


    gsap.ticker.add(this.seekVideo);

  }

  seekVideo = () => {
    // console.log(this.vid.currentTime);
    // console.log(this.vid.duration);
    this.vid.currentTime = (this.animation.getTimeline().time());
  }

  setAnimation(animation){
    this.animation = animation;
  }

  handleClick = () => {
    if(this.showVideo) {
      this.showVideo = false;
      this.banner.classList.add('hideVideo');
      this.buttonSwitchCopy.innerHTML = config.content.copy_show_video;
    } else {
      this.showVideo = true;
      this.banner.classList.remove('hideVideo');
      this.buttonSwitchCopy.innerHTML = config.content.copy_hide_video;
    }

  };

  async start() {
    await this.init();

    this.animation.play();
  }
}

