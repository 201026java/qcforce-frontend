import * as fromReports from '../actions/reports.action';
import { ReportsState, initReportsState } from '../states';
import { cloneDeep } from 'lodash';

export function reportsReducer(
  state: ReportsState = initReportsState,
  action: fromReports.ReportsAction
): ReportsState 
{
  switch (action.type) {
    case fromReports.FILTER_DISPLAYED_CHANGE: {
      const filterOptionDisplayed = action.payload;
      return { ...state, filterOptionDisplayed };
    }
    case fromReports.BATCH_FILTER_CHANGE: {
      const batchFilter = action.payload; 
      return { ...state, batchFilter };
    }
    case fromReports.WEEK_FILTER_CHANGE: {
      const weekFilter = action.payload;
      return { ...state, weekFilter };
    }
    case fromReports.GET_ANSWERS: {
        return { ...state };
    }
    case fromReports.GET_ANSWERS_SUCCESS: {
      let responseData = action.payload;
      return { ...state, responseData };
    }
    case fromReports.GET_ANSWERS_FAIL: {
      return { ...state };
    }
    case fromReports.GET_BATCHES: {
      return { ...state };
    }
    case fromReports.GET_BATCHES_SUCCESS: {
      let batchFilterOptions = ['All', 'Average'];
      for (let batch of action.payload) {
        batchFilterOptions.push(batch.batchName);
      }
      return {...state, batchFilterOptions};
    }
    case fromReports.GET_BATCHES_FAIL: {
      return { ...state };
    }
  }
  return state;
}
