import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.ADD_COMMENT:
            const oldComments = state.comments;
            const newComment = action.payload;
            const id = oldComments.length;
            newComment.id = id;
            const newComments = [...oldComments, newComment];
            return {...state, comments: newComments};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};