let initState={
    text:""
}

export const reducer =(state = initState , action )=>{
    switch (action.type) {
        case "TEST":
            return { ...state };
        case "TEXT_UPLOADED":
            let str = action.payload
            // console.log(str)
            let noComments;
            if(str.includes("/*") && str.includes("*/")){
                 removeDoubleComments(str)   
            }
           function removeDoubleComments(str){
            let position1 = str.indexOf("/*")
            let position2 = str.indexOf("*/")
            let firstPart = str.substr(0,position1)
            let secondPart = str.substr(position2+2,str.length-1)
            let noDoubleComments = firstPart+secondPart
            if(noDoubleComments.includes("/*") && noDoubleComments.includes("*/")){
                removeDoubleComments(noDoubleComments)
            }else{
                noComments = noDoubleComments
            }
          
        }
        
           
            return{
                ...state,
                text:noComments
            }

            default:
             return { ...state  };
    }
} 



