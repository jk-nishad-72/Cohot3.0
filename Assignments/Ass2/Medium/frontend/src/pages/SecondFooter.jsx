
import React from 'react'
import Foot from '../components/Foot'

const SecondFooter = () => {


  let footArray = [ 
    
    {'imgUrl':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrhEQktURWOrpwU0Yg96920969f_85pjb9wC-rpw3930lNvoD_',
      'head':'PRIMIUM INSULTATION',
      'para':'Build for extreme window conditions'
    } ,
     {'imgUrl':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrhEQktURWOrpwU0Yg96920969f_85pjb9wC-rpw3930lNvoD_',
      'head':'PRIMIUM INSULTATION',
      'para':'Build for extreme window conditions'
    } ,
     {'imgUrl':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrhEQktURWOrpwU0Yg96920969f_85pjb9wC-rpw3930lNvoD_',
      'head':'PRIMIUM INSULTATION',
      'para':'Build for extreme window conditions'
    } ,
     {'imgUrl':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrhEQktURWOrpwU0Yg96920969f_85pjb9wC-rpw3930lNvoD_',
      'head':'PRIMIUM INSULTATION',
      'para':'Build for extreme window conditions'
    } ,

  ]


  return (
   <div className='w-[100%] h-[20vh] bg-[#0A131E] p-5 '>

            <div  className='w-[100%] h-[15vh] bg-[#011d32]  rounded-2xl border-[#747c82] border-[1px] p-4 flex  '>

                    
                    {
                      footArray.map((foot)=>{
                         return < Foot  imgUrl = {foot.imgUrl} head = {foot.head} para = {foot.para} />
                      })

                    }

            </div>

        </div>
  )
}

export default SecondFooter