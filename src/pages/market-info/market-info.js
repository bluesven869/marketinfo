import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import * as axios from "axios";
import * as moment from "moment";
import StarIcon from "@material-ui/icons/Star";
import "./market-info.scss";

const API_BASE_URL = "https://liquality.io/swap/agent/api/";

function MarketInfo() {
  const apiCallIntervals = useSelector((state) => state.app.apiCallIntervals);

  const [marketData, setMarketData] = useState([]);
  const [timerID, setTimerID] = useState(null);

  const callAPI = useCallback(async () => {
    console.log("API is called", performance.now());
    const data = await axios.get(`${API_BASE_URL}swap/marketinfo`);
    setMarketData(data.data);
  }, []);

  useEffect(() => {
    if (timerID) {
      clearInterval(timerID);
    }
    setTimerID(setInterval(() => callAPI(), apiCallIntervals * 1000));
    // eslint-disable-next-line
  }, [apiCallIntervals]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Pair</TableCell>
            <TableCell align="left">Rate</TableCell>
            <TableCell align="right">Max</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Updated At</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {marketData.map((data) => {
            return (
              <TableRow key={`row-${data.from}-${data.to}`}>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <StarIcon className="inactive" />
                    {data.from} / {data.to}
                  </Box>
                </TableCell>
                <TableCell align="left">{data.rate}</TableCell>
                <TableCell align="right">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <div>
                      <span className="max">{data.max}</span>
                      <span className="min">{data.min}</span>
                    </div>
                    <div>&#8645;</div>
                  </Box>
                </TableCell>

                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">
                  {moment(data.updatedAt).format("MMM Do YYYY hh:mm:ss A")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MarketInfo;
