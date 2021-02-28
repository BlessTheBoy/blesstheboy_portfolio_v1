import projectsList from "./db.json";
// console.log(projectslist);
export const initialState = {
  theme: "dark",
  projectsLength: projectsList.projects.length,
  projectIndex: 0,
  projectDetails: projectsList.projects[0],
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "NEXT_PROJECT":
      if (state.projectIndex + 1 !== projectsList.length) {
        const prevIndex = state.projectIndex;
        return {
          ...state,
          projectIndex: prevIndex + 1,
          projectDetails: projectsList.projects[prevIndex + 1],
        };
      }
      return state;
    case "PREV_PROJECT":
      if (state.projectIndex !== 0) {
        const prevIndex = state.projectIndex;
        return {
          ...state,
          projectIndex: prevIndex - 1,
          projectDetails: projectsList.projects[prevIndex - 1],
        };
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
