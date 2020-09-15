import { SET_INTERVALS } from "../constants/types";

export function setAPICallIntervals(intervals) {
  return {
    type: SET_INTERVALS,
    apiCallIntervals: intervals,
  };
}
