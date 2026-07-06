




const alllElementSection = document.querySelector('.allElems')


const  fullElementOFFeaturBox  = document.querySelectorAll('.fullElem')


const featureBox  = document.querySelectorAll('.feature')


const backBtn = document.querySelectorAll('.back')

const allFeatursVideo = document.querySelectorAll('.feature video')

console.log(allFeatursVideo);


featureBox.forEach((elem)=>{

    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
        fullElementOFFeaturBox[elem.id].style.display = 'flex';
    })
    

    
elem.addEventListener('mouseenter',()=>{
    // console.log(allFeatursVideo[elem.id]);
    allFeatursVideo[elem.id].style.display = 'flex'
})

elem.addEventListener('mouseleave',()=>{
    // console.log(allFeatursVideo[elem.id]);
    allFeatursVideo[elem.id].style.display = 'none'
})


})



backBtn.forEach((elem)=>{

    
    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
    
        fullElementOFFeaturBox[elem.id].style.display = 'none';

    })
    

})


