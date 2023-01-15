import React from "react";
import { Grid, Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import Box from "@mui/material/Box";



function Nav() {
  return (
    <div className="container">
      <ul className="nav-ul">
        <li className="topic">Experience</li>
        <li>Tech Stacks</li>
        <li>Project</li>
      </ul>
      <ul className="rightbar"> 
        <Grid.Container gap={2}>
          <Grid>
            <Switch
              checked={true}
              size="sm"
              iconOn={<SunIcon />}
              iconOff={<MoonIcon />}
            />
          </Grid>
        </Grid.Container>
      </ul>
    </div>
  );
}

export default Nav;
