const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    duration:2,
    opacity:0
})
Shery.textAnimate("#headings h1" , {
    style: 2,
    y:10,
    delay:0.3,
    duration:2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier:0.1,

});


Shery.imageEffect("#imgntext img",{
    style: 3,
    config:{"uFrequencyX":{"value":6.11,"range":[0,100]},"uFrequencyY":{"value":7.63,"range":[0,100]},"uFrequencyZ":{"value":35.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":23.12},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999743635942},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.53}},"shapeEdgeSoftness":{"value":0.09,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":false},"uSpeed":{"value":0.38,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.88,"range":[0,5]},"uFrequency":{"value":4.81,"range":[0,10]}},

})


Shery.imageEffect("#susimg img",{
    style: 3,
    config: {"uFrequencyX":{"value":3.82,"range":[0,100]},"uFrequencyY":{"value":6.11,"range":[0,100]},"uFrequencyZ":{"value":35.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":23.12},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999743635942},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.53}},"shapeEdgeSoftness":{"value":0.09,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":false},"uSpeed":{"value":0.38,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.88,"range":[0,5]},"uFrequency":{"value":4.81,"range":[0,10]}},
    

})



Shery.imageEffect(".imgss img",{
    style: 3,
    config: {"uFrequencyX":{"value":1.53,"range":[0,100]},"uFrequencyY":{"value":1.53,"range":[0,100]},"uFrequencyZ":{"value":35.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":36.11},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999743635942},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.53}},"shapeEdgeSoftness":{"value":0.09,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.16,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":false},"uSpeed":{"value":0.38,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.88,"range":[0,5]},"uFrequency":{"value":4.81,"range":[0,10]}},
    


})




gsap.from("#imgntext img",{
    y:70,
    opacity:0,
    duration: 2,
    ease: Expo,
})


Shery.imageEffect("#bimg",{
    style: 5,
    config: {"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1713484208380103},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.09,"range":[0,2]},"discard_threshold":{"value":0.41,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}} ,
    gooey: true,

});







document.querySelector("#ftext button").addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1.5,
        eae: Power4
    })
})
document.querySelector("#ftext button").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity: 0,
        duration: 1.5,
        ease: Power4
    })
})

