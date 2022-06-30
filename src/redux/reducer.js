let initState={
    text:""
}

export const reducer =(state = initState , action )=>{
    switch (action.type) {
        case "TEST":
            return { ...state };
        case "TEXT_UPLOADED":
            
            console.log(action.payload)
            return{
                ...state,
                text:action.payload
            }

            default:
             return { ...state  };
    }
} 