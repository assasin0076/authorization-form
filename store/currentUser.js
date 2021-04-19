import axios from 'axios'

export const state = () => ({
    user: {
        username: '',
        password: '',
    }
});

export const actions = {
    loginUser( {  }, user ) {
        axios
        .post('https://agile-garden-50413.herokuapp.com/api/token/login/', {
            password: user.password,
            username: user.username
        })
        .then( response => {

            if ( response.data.auth_token ) {
                localStorage.setItem(
                    'auth_token',
                    response.data.auth_token
                )
                
                window.location.replace('/')
            }
            

        })
    }
}