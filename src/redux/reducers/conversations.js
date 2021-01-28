const initialState = {
    newMessage: false,
    messages: [],
    conversations: [],
    conversationId: 1
}

module.exports = (state = initialState, actions) => {
    switch (actions.type) {
        case "NEW_MESSAGE":
            return Object.assign([], state, {
                newMessage: true
            })
        case "SET_CONVERSATION_MESSAGE":
            return Object.assign([], state, {
                conversationId: actions.payload.id
            })
        case "GET_CONVERSATION_MESSAGE":
            return Object.assign([], state, {
                messages: actions.payload,
            })
        default:
            return state
    }
}