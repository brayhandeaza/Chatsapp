


const initialState = {
    chats: [
        { title: "Brad Pitt", url: "assets/img/bp.jpg" },
        { title: "Chriss Hunter", url: "assets/img/ch.jpg" },
        { title: "Dwayne Jonson", url: "assets/img/dj.jpeg" },
        { title: "Jennifer Lawrence", url: "assets/img/jl.jpeg" },
        { title: "Keanus Reeves", url: "assets/img/kr.png" },
        { title: "Jaqueline Lunas ", url: "assets/img/lj.jpg" },
        { title: "Ryant Rainor ", url: "assets/img/rr.jpg" },
        { title: "Dwayne Jonson", url: "assets/img/dj.jpeg" },
        { title: "Jennifer Lawrence", url: "assets/img/jl.jpeg" },
        { title: "Keanus Reeves", url: "assets/img/kr.png" },
        { title: "Jaqueline Lunas ", url: "assets/img/lj.jpg" },
        { title: "Ryant Rainor ", url: "assets/img/rr.jpg" },
        { title: "Dwayne Jonson", url: "assets/img/dj.jpeg" },
        { title: "Jennifer Lawrence", url: "assets/img/jl.jpeg" },
        { title: "Keanus Reeves", url: "assets/img/kr.png" },
        { title: "Jaqueline Lunas ", url: "assets/img/lj.jpg" },
        { title: "Ryant Rainor ", url: "assets/img/rr.jpg" },
        { title: "Sofia Fritt ", url: "assets/img/sf.jpeg" }
    ]
}

module.exports = (state = initialState, actions) => {
    switch (actions.type) {
        case "chat":
            return Object.assign([], state, {

            })
        default:
            return state
    }
}
