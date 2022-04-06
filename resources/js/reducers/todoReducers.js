const initialData = {
    list : []
}

const todoReducers = (state = initialData,action) => {
    switch (action.type){
            case "FETCH_ALL":
            // eslint-disable-next-line no-unused-vars,no-case-declarations
            const Todos = action.payload;
            return {
                ...state,
                list: Todos
            }
            case "ADD_TO_DO":
            // eslint-disable-next-line no-case-declarations
            const {id,title,status} = action.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        title:title,
                        status:status
                    }
                ]
            }
            case "DELETE_TO_DO":
                // eslint-disable-next-line no-case-declarations
                const Id = action.payload;
                // eslint-disable-next-line no-case-declarations
                const newList = state.list.filter((elem) => elem.id !== Id)
            return{
                ...state,
                list: newList
            }

            case "CHANGE_TO_DO_STATUS":
            // eslint-disable-next-line no-case-declarations
            return{
                ...state,
            }
        default:return state;
    }
}

export default todoReducers;