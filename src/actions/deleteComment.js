export const deleteCommentAction = id => {

    return {
        type: "DELETED_COMMENT",
        payload: id
    };
};
