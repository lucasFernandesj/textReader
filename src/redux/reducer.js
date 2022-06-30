let initState={
    text:""
}

export const reducer =(state = initState , action )=>{
    switch (action.type) {
        case "TEST":
            return { ...state };
        case "TEXT_UPLOADED":
            
            
            let strArr = action.payload.split('')
            for(let i = 0 ; i < strArr.length ; i++){ 
                if((strArr[i] === '/' && strArr[i + 1] === '*' )|| (strArr[i] === '*' && strArr[i + 1] === '/' )||( strArr[i] === '/' && strArr[ i + 1] === '/' )){
                     strArr.splice(i ,1)
                     strArr.splice(i,1)
                }
            
            }
            let sanitized = strArr.join('')


           
            return{
                ...state,
                text:sanitized
            }

            default:
             return { ...state  };
    }
} 



