import axios from 'axios'

export const state = () => ({
    data: {}
});

export const actions = {
    getUsersData( {  } ) {
        axios
        .get('https://agile-garden-50413.herokuapp.com/api/users/')
        .then( response => {

            console.log(response)

        })
    }
}