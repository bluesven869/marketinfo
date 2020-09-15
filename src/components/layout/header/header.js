import React, { useCallback } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { setAPICallIntervals } from "../../../actions/api-call-intervals";

import logo from "../../../assets/logo.svg";
import "./header.scss";

function Header() {
  const apiCallIntervals = useSelector((state) => state.app.apiCallIntervals);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch(setAPICallIntervals(+e.target.value));
    },
    [dispatch]
  );

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Market Info</h1>
      <FormControl variant="filled" className="white-bg border-radius-4 ">
        <InputLabel htmlFor="filled-age-native-simple">
          API call intervals
        </InputLabel>
        <Select
          native
          value={apiCallIntervals}
          onChange={handleChange}
          inputProps={{
            name: "api-call-interval",
            id: "filled-age-native-simple",
          }}
        >
          <option value={5}>5 Seconds</option>
          <option value={10}>10 Seconds</option>
          <option value={15}>15 Seconds</option>
        </Select>
      </FormControl>
    </header>
  );
}

export default Header;
