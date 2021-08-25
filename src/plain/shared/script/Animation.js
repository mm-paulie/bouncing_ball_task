import FrameAnimation from "@mediamonks/temple/animation/FrameAnimation"

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
    this.vid = document.body.querySelector(".video1");

    tl.add("start", 0.5)
    // tl.to('.content', {duration:1.418083}, "start")
    tl.to('.content', {duration:0.05, opacity:1}, "start")
    tl.to('.ball', {duration:0.04, x:30, y:8, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.05, x:74, y:32, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:117, y:70, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:160, y:130, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.05, x:200, y:189, width:89, height:108, rotation:-21, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:240, y:258, width:75, height:123, rotation:-17, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:269, y:330, width:67, height:136, rotation:-16, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:290, y:421, width:67, height:147, rotation:-12, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:276, y:533, width:143, height:64, rotation:-1, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:350, y:406, width:63, height:131, rotation:20, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:379, y:336, width:73, height:118, rotation:25, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:407, y:306, width:82, height:103, rotation:39, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:433, y:287, width:94, height:99, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:463, y:281, width:96, height:97, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:498, y:288, width:98, height:97, rotation:4, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:527, y:308, width:98, height:98, rotation:4, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:553, y:335, width:98, height:98, rotation:4, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:586, y:391, width:94, height:98, rotation:4, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:615, y:431, width:84, height:118, rotation:4, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:616, y:519, width:116, height:78, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:665, y:453, width:80, height:109, rotation:27, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:682, y:437, width:96, height:98, rotation:17, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:706, y:427, width:96, height:96, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:733, y:433, width:96, height:96, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:760, y:448, width:96, height:96, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:778, y:466, width:90, height:108, rotation:-14, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:788, y:511, width:110, height:85, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:819, y:482, width:95, height:95, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:839, y:478, width:95, height:95, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:854, y:482, width:95, height:95, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:867, y:491, width:95, height:95, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.04, x:879, y:502, width:101, height:94, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
    tl.to('.ball', {duration:0.5, x:980, y:498, width:98, height:98, rotation:0, transformOrigin:"center center", ease:'power1.out'}, ">")
    tl.to('.ball', {duration:0.04, x:979, y:498, width:98, height:98, rotation:0, transformOrigin:"center center", ease:'easeNone'}, ">")
  }
}
