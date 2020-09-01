import React from "react";
import "./Timeline.css";
import AppBar from "./AppBar";
import WorkInfo from "./WorkInfo";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";

function Timeline() {
  return (
    <div>
      <AppBar />
      <div className="jyoken-wrapper">
        <button>条件で検索</button>
      </div>
      <div className="search-wrapper">
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Keyword" variant="outlined" fullWidth />
        </form>
      </div>
      <WorkInfo />
      <WorkInfo />
      <WorkInfo />
      <div className="add-work">
        <IconButton color="secondary" aria-label="add an alarm" size="large">
          <AddCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Timeline;
