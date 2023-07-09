import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 4 }}
    >
      <div>
        <Typography variant={"h6"}>CoursERA</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              window.location = "/signin";
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
