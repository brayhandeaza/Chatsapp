const conversations = [
    { 
        id: 1, 
        imageUrl: "rr", message: "You Merry Christmas :pizza: my blood" },

    { id: 2, imageUrl: "lj", message: "Heyyy Antuan el cabello" },
    { id: 2, imageUrl: "lj", message: "Same for u :heart::heart::heart::heart:" },
    { id: 2, imageUrl: "lj", message: "Man" },
    { id: 2, imageUrl: "lj", message: "Same for you :fast_forward:" },

    { id: 1, imageUrl: "rr", message: "Klk" },
    { id: 1, imageUrl: "rr", message: "Yavte sanaste :heart: ?" },
    { id: 1, imageUrl: "rr", message: "Del Covid-19" },
    { id: 1, imageUrl: "rr", message: "Y tu sigue yengo al Gym" },

    { id: 2, imageUrl: "lj", message: "Yo voy con tormenta o sin tormenta manin" },
    { id: 2, imageUrl: "lj", message: "Manin yo no ando en senti y tú lo sabe" },
    { id: 2, imageUrl: "lj", message: "Yo le doy como sea" },
    { id: 2, imageUrl: "lj", message: "Te dejo :coffee: ahora voy para el Gym" },

    { id: 1, imageUrl: "rr", message: "Tato" },
    { id: 1, imageUrl: "rr", message: "Mete mano de platano." },
    { id: 1, imageUrl: "rr", message: "You Merry Christmas :pizza: my blood" },

    { id: 2, imageUrl: "lj", message: "Heyyy Antuan el cabello" },
    { id: 2, imageUrl: "lj", message: "Same for u :heart::heart::heart::heart:" },
    { id: 2, imageUrl: "lj", message: "Man" },
    { id: 2, imageUrl: "lj", message: "Same for you :fast_forward:" },

    { id: 2, imageUrl: "lj", message: "Yo voy con tormenta o sin tormenta manin" },
    { id: 2, imageUrl: "lj", message: "Manin yo no ando en senti y tú lo sabe" },
    { id: 2, imageUrl: "lj", message: "Yo le doy como sea" },
    { id: 2, imageUrl: "lj", message: "Te dejo :coffee: ahora voy para el Gym" },

    { id: 1, imageUrl: "rr", message: "Klk" },
    { id: 1, imageUrl: "rr", message: "Yavte sanaste :heart: ?" },
    { id: 1, imageUrl: "rr", message: "Del Covid-19" },
    { id: 1, imageUrl: "rr", message: "Y tu sigue yengo al Gym" },

    { id: 2, imageUrl: "lj", message: "Yo voy con tormenta o sin tormenta manin" },
    { id: 2, imageUrl: "lj", message: "Manin yo no ando en senti y tú lo sabe" },
    { id: 2, imageUrl: "lj", message: "Yo le doy como sea" },
    { id: 2, imageUrl: "lj", message: "Te dejo :coffee: ahora voy para el Gym" },

    { id: 1, imageUrl: "rr", message: "Tato" },
    { id: 1, imageUrl: "rr", message: "Mete mano de platano." },
    { id: 2, imageUrl: "lj", message: "Manin yo no ando en senti y tú lo sabe" },
    { id: 2, imageUrl: "lj", message: "Yo le doy como sea" },
    { id: 2, imageUrl: "lj", message: "Te dejo :coffee: ahora voy para el Gym" }
    
]

const initialState = {
    conversations,
}

module.exports = (state = initialState, actions) => {
    switch (actions.type) {
        case "conversations":
            return Object.assign([], state, {

            })
        default:
            return state
    }
}