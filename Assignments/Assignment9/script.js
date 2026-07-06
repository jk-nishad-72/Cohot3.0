




const alllElementSection = document.querySelector('.allElems')


const  fullElementOFFeaturBox  = document.querySelectorAll('.fullElem')


const featureBox  = document.querySelectorAll('.feature')


const backBtn = document.querySelectorAll('.back')


featureBox.forEach((elem)=>{

    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
        fullElementOFFeaturBox[elem.id].style.display = 'flex';
    })
    
})

backBtn.forEach((elem)=>{

    
    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
    
        fullElementOFFeaturBox[elem.id].style.display = 'none';

    })
    

})
