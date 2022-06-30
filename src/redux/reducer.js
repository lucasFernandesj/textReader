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
                noComments = noDoubleComments
                if(noDoubleComments.includes("//")){
                    removeSingleComment(noDoubleComments)
                }
            }
          
        }
            if(str.includes("//")){
                removeSingleComment(str)
                


            }

            function removeSingleComment(str){
                let position1 = str.indexOf("//")
                let position2 = str.indexOf('\r\n')
                let comment = str.substr(position1 , position2)
                let part1=str.substr(0 , position1 )
                let part2 = str.substr(position2 , str.length-1)
                let noSingleComment = part1 + part2
                if(noSingleComment.includes("//")){
                    removeSingleComment(noSingleComment)
                }
                else{

                    noComments = noSingleComment
                    // console.log(noComments)
                    if(noComments.includes("/*")&&noComments.includes("*/")){
                        removeDoubleComments(noComments)
                    }
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



