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

    gsap.defaults({
      ease: 'easeNone',
      duration: 0.04,
      transformOrigin:"center center"
    });

    if(config.content.gsap.loop) {
      tl.repeat(-1);
    }

    tl.add("start")
    tl.to('.content', {duration:0.03, opacity:1}, "start")

    tl.to('.ball', {x:30, y:8}, ">")
    tl.to('.ball', {duration:0.05, x:74, y:32}, ">")
    tl.to('.ball', {x:117, y:70}, ">")
    tl.to('.ball', {x:160, y:130}, ">")
    tl.to('.ball', {duration:0.05, x:200, y:201, width:89, height:108, rotation:-21}, ">")
    tl.to('.ball', {x:240, y:281, width:75, height:123, rotation:-17}, ">")
    tl.to('.ball', {duration:0.03, x:267, y:365, width:67, height:136, rotation:-16}, ">")
    tl.to('.ball', {x:290, y:470, width:67, height:147, rotation:-12}, ">")
    tl.to('.ball', {x:276, y:493, width:143, height:64, rotation:-1}, ">")
    tl.to('.ball', {x:350, y:439, width:63, height:131, rotation:20}, ">")
    tl.to('.ball', {x:379, y:356, width:73, height:118, rotation:25}, ">")
    tl.to('.ball', {x:407, y:309, width:82, height:103, rotation:39}, ">")
    tl.to('.ball', {x:433, y:287, width:94, height:99, rotation:0}, ">")
    tl.to('.ball', {x:463, y:281, width:96, height:97, rotation:0}, ">")
    tl.to('.ball', {x:498, y:288, width:98, height:97, rotation:4}, ">")
    tl.to('.ball', {x:527, y:308, width:98, height:98, rotation:4}, ">")
    tl.to('.ball', {x:553, y:335, width:98, height:98, rotation:4}, ">")
    tl.to('.ball', {x:586, y:391, width:94, height:98, rotation:4}, ">")
    tl.to('.ball', {x:613, y:451, width:84, height:114, rotation:-9}, ">")
    tl.to('.ball', {duration:0.05, x:616, y:495, width:116, height:78, rotation:0}, ">")
    tl.to('.ball', {x:665, y:463, width:80, height:109, rotation:27}, ">")
    tl.to('.ball', {x:682, y:437, width:96, height:98, rotation:17}, ">")
    tl.to('.ball', {x:706, y:427, width:96, height:96, rotation:0}, ">")
    tl.to('.ball', {x:733, y:430, width:96, height:96, rotation:0}, ">")
    tl.to('.ball', {x:760, y:445, width:96, height:96, rotation:0}, ">")
    tl.to('.ball', {x:778, y:471, width:90, height:108, rotation:-14}, ">")
    tl.to('.ball', {duration:0.05, x:788, y:498, width:110, height:85, rotation:0}, ">")
    tl.to('.ball', {x:819, y:479, width:95, height:95, rotation:0}, ">")
    tl.to('.ball', {x:839, y:475, width:95, height:95, rotation:0}, ">")
    tl.to('.ball', {x:854, y:474, width:95, height:95, rotation:0}, ">")
    tl.to('.ball', {x:867, y:486, width:95, height:95, rotation:0}, ">")
    tl.to('.ball', {x:877, y:501, width:101, height:94, rotation:0}, ">")
    tl.to('.ball', {duration:0.5, x:980, y:500, width:98, height:98, rotation:0, ease:'power1.out'}, ">")
  }
}
