import { Action, createReducer, on } from "@ngrx/store";
import { menuClick, subMenuClick } from "../actions/header.action";
import { INITHEADERSTATE, REPORTSSUBMENU, SURVEYSSUBMENU, BATCHESSUBMENU } from "../consts/header.const"; 
import { HeaderState } from '../states/header.state';

const initHeaderState : HeaderState = INITHEADERSTATE;

const _headerReducer = createReducer(
  initHeaderState,
  on(menuClick, (state, { name }) => {
    let newState = {...state};
    if (name === "Reports") {
      state.subMenuList = REPORTSSUBMENU;
    } else if (name === "Batches") {
      state.subMenuList = BATCHESSUBMENU;
    } else if (name === "Surveys") {
      state.subMenuList = SURVEYSSUBMENU;
    } else {
      state.subMenuList = null;
    }
    return newState;
  }),
  on(subMenuClick, (state, { name }) => {
    let newState = {...state};
    for (let menuItem of newState.subMenuList) {
      if (menuItem.name === name) {
        // Highlight
      }
    }
    return newState;
  })
);

export function headerReducer(state : HeaderState | undefined, action : Action) {
  return _headerReducer(state, action); 
}
