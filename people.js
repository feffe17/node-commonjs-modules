console.log("hi there");

const { utente } = require("./names");
const { hobbies } = require("./hobbies");



function persona() {
    const user = utente("federico" , "di murro");
    const passatempi = hobbies("palestra" , "serie tv" , "ballare");
    
    return{
        firstName: user.firstName,
        lastName: user.lastName,
        hobbies: passatempi.hobbies
    }
    
}

console.log(persona());




