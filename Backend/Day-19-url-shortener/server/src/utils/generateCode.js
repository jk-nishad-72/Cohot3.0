


export const generateCode = () => {
      let mainString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      let shortcode = "";

      for(let i = 0;i<= 6;i++){

         shortcode += mainString.charAt(Math.floor(Math.random() * 62))

      }

      return shortcode; 
}

// console.log(generateCode())