function page1Animation(){
    var  tl = gsap.timeline();
    tl.from(" nav h1, nav a, .menu button",{
        
            y:-40,
            opacity:0,
            delay:.6,
            duration:1,
            stagger:.1
        
    })
    
    tl.from(".center-part1 h1",{
        x:-500,
        opacity:0,
        duration:.6,
        
    })
    tl.from(".center-part1 p",{
        x:-200,
        opacity:0,
        duration:1,
        
    })
    
    tl.from(".center-part1 button",{
        y:20,
        opacity:0,
    })
    
    tl.from(".center-part2 img",{
        
        opacity:0,
       duration:.5
    },"-=1")
    
    
    tl.from(".section1-buttom img",{
        opacity:0,
        y:30,
        stagger:0.15,
        duartion:0.6
    })
    
    
}

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
       
        start:"top 40%",
        end:"top 0",
        scrub:2
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5,
   
})


// line1
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1

},"anim")


tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1

},"anim")

//line2
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1

},"anim1")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1

},"anim1")


page1Animation();