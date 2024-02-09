
var t1 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    scroller:"body",
    scrub:2,
    end:"top 30%",
    start:"top 90%",
    markers:true
}});
t1.to(".fantaimg",{
    top:"120%",
    left:"2%"
},'orange')
t1.to(".orangecut",{
    top:"160%",
    left:"23%"
},'orange')
t1.to(".orangefull",{
    width:"15%",
    top:"163%",
    left:"80%"
},'orange')
t1.to(".leaf",{
    top:"100%",
    rotate:"150deg",
    left:"75%"
},'orange')
t1.to(".leaf2",{
    top:"100%",
    rotate:"150deg",
    left:"1%"
},'orange')

var t2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    scroller:"body",
    scrub:2,
    end:"top 20%",
    start:"top 70%",
    markers:true
}});

t2.to(".fantaimg",{
    top:"218%",
    width:"34%",
    left:"33%"
},"orange2")
t2.to(".orangecut",{
    top:"209%",
    left:"41.9%",
    width:"17%"
},"orange2")
t2.from(".pepsi",{
    rotate:"-90%",
    top:"110%",
    left:"100%"
},"orange2")
t2.from(".cocacola",{
    rotate:"90%",
    top:"110%",
    left:"100%"
},"orange2")