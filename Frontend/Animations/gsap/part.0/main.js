/**
 *          <!-- 1. Create a blank HTML file,
              load GSAP from the CDN, and animate a 
              `<div>` 300px to the right over 2 seconds.
                Open it in a browser and confirm it works.
                -->
 */


gsap.to("#box",{
    x:300,
    delay:1,
    duration:2,
    // ease:"power1.out",
    // yoyo:true,
    // repeat:-1
}) 