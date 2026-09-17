

const generateCode = ()=>{

     let mainString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"


     let shortcode = "";

     for(let i = 0;i<6;i++){
         
         shortcode += mainString.charAt(Math.random() * 62)
     }

     return shortcode

}


export default generateCode;
