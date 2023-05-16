export const getStateLocalStorage = () =>{


    const commentsStorage = localStorage.getItem('comments');
    if(commentsStorage === null) return undefined;
    return JSON.parse(commentsStorage);
}

export const setStateLocalStorage = state => {
    localStorage.setItem("comments", JSON.stringify(state));
  };