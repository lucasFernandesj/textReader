import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

let initState={
    text:""
}

export const reducer =(state = initState , action )=>{
    switch (action.type) {
        case "TEST":
            return { ...state };
        case "TEXT_UPLOADED":
            let str = action.payload
            // console.log(action.payload)
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
                if(noDoubleComments.includes("//")){
                    removeSingleComment(noDoubleComments)
                }else{
                    noComments = noDoubleComments

                }
            }
          
        }
            if(str.includes("//")){
                removeSingleComment(str)
                


            }

            function removeSingleComment(str){
            //    console.log(str)
            let commentStart = str.indexOf('//')
            let lineBreak;   
            //    console.log("comment starts at "+commentStart)
               let strArr=str.split('')
            
               for(let i = commentStart ; i < strArr.length ; i++){
                        if(strArr[i]==="\r" && strArr[i+1]==='\n'){
                            // console.log("line break at "+i)
                            lineBreak = i
                            break;
                        }else{
                            lineBreak = str.length
                        }
                    }
                    let commentRemoved = str.substr(0 , commentStart)+str.substr(lineBreak , str.length-1)
                    // console.log("comment removed "+commentRemoved)
                    if(commentRemoved.includes("//")){
                        removeSingleComment(commentRemoved)
                    }else if(commentRemoved.includes("/*") && commentRemoved.includes("*/")){
                        removeDoubleComments(commentRemoved)
                    }else{
                        noComments = commentRemoved
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



