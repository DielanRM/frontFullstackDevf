//creacion y configuracion de la rebanada
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//si ya hay datos guardados en el localstorage de un usuario
const user= JSON.parse(localStorage.getItem('user'))


//datos sin usuario loggeado
const initialState = {
    user: user ? user : null, //rectifica si el user existe (operador ternario)
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


//creacion de la rebanada
export const authSlice = createSlice({
    name: 'auth',   //primer propiedad nombre de la rebanada
    initialState,   //estado inicial (es el que defini al en la parte de arriba)
    reducers:{      //funciones reductoras
        reset: (state) =>{//ressetea el estado
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: ()=>{}
}
)

export const {reset} = authSlice.actions //exporto a funcion reset
export default authSlice.reducer