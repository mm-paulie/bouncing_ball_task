import FrameAnimation from "@mediamonks/temple/animation/FrameAnimation"
import config from "richmediaconfig";

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container) {
    super();

    this.container = container;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl){
    tl.add("start")
    tl.to('.content', {duration:0.03, opacity:1}, "start")
  }
}
