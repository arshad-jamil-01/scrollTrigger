var card = document.querySelectorAll(".card")
card.forEach(function(cards){
gsap.to(cards,{
    scale:0.7,
    opacity:0,
    scrollTrigger: {
      trigger:cards,
      start:"top 15%",
      end:"bottom 15%",
    //markers:true,
      scrub:true,
      
    }
})
})



// gsap.to(".card1",{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger: {
//       trigger:".card1",
//       start:"top 15%",
//       end:"bottom 15%",
//       markers:true,
//       scrub:true,
//       duration:1.5,
//     }
// })

// gsap.to(".card2",{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger: {
//       trigger:".card2",
//       start:"top 15%",
//     end:"bottom 15%",
//       markers:true,
//       scrub:true
//     }
// })


// gsap.to(".card3",{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger: {
//       trigger:".card3",
//       start:"top 15%",
//     end:"bottom 15%",
//       markers:true,
//       scrub:true
//     }
// })

// gsap.to(".card4",{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger: {
//       trigger:".card4",
//       start:"top 15%",
//     end:"bottom 15%",
//       markers:true,
//       scrub:true
//     }
// })

// gsap.to(".card5",{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger: {
//       trigger:".card5",
//       start:"top 15%",
//     end:"bottom 15%",
//       markers:true,
//       scrub:true
//     }
// })

// // gsap.to(".card6",{
// //     scale:0.7,
// //     opacity:0,
// //     scrollTrigger: {
// //       trigger:".card6",
// //       start:"top 15%",
// //     end:"bottom 15%",
// //       markers:true,
// //       scrub:true
// //     }
// // })