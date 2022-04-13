import React from "react";
import HomeCards from "./HomeCards"
import { Typography, Link } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


const Home = () => {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: "90vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

    {/* --------------------THIS IS THE SIDE PANEL ABOUT ME----------------------- */}
    
      <div className="aboutMeSidePanel">
        <div className="aboutMeTitleandImage">
          <Typography variant="h3" color="secondary">About Me </Typography>
          <img style={{ width: "30%", borderRadius: "100%" }} alt="Charlote face" src="./assets/AboutMePicture2.png" />
        </div>
        <Typography variant="h7" textAlign="left" color="secondary" sx={{ width: "90%", paddingBottom: "30px" }}>
          Charlotte Vestrheim (Vesterheim)
          I am passionate about Astrology and how its symbolic language offers insight, awareness and new perspectives into our psyche,
          mental powers and emotional drives.
          Astrology can help us recognise our challenges and inner dynamics and assist us in navigating these better.
          By becoming clearer on where our strengths lie,
          connect with our resourcefulness and capabilities we can make the best of our personal as well as professional lives.
          <br />
          <br />
          I am an eternal student of Astrology;
          its insights are as endless as the universe and there is always a new topic to dive into.
          I have studied at The Faculty of Astrology Studies and London School of Astrology
          (LSA) and have enjoyed giving astrology readings for years.
          <br />
          <br />
          <em>
            "The Meaning of Life is to find your purpose. The purpose of life is to then give it away."
            <br />
            -Pablo Picasso
          </em>
        </Typography>
        <Button sx={{ marginTop: "-30px" }} color="secondary">Close</Button>
      </div>
    </Box>
  );

  // -------------THIS IS THE END OF THE PANEL ABOUT ME----------------------- 

  return (
    <div className="homePage">

      <HomeCards />

      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Link href="#" className="aboutMeButton" onClick={toggleDrawer(anchor, true)}>
            <KeyboardArrowLeftIcon fontSize="large" />
          </Link>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}



      <div className="aboutMeSide">
        <div className="aboutMeTitleandImage">
          <Typography variant="h3" color="primary">About Me </Typography>
          <img style={{ width: "30%", borderRadius: "100%" }} alt="Charlote face" src="./assets/AboutMePicture2.png" />
        </div>
        <Typography variant="p" textAlign="left" sx={{ width: "90%", paddingBottom: "30px" }}>
          Charlotte Vestrheim (Vesterheim)
          I am passionate about Astrology and how its symbolic language offers insight, awareness and new perspectives into our psyche,
          mental powers and emotional drives.
          Astrology can help us recognise our challenges and inner dynamics and assist us in navigating these better.
          By becoming clearer on where our strengths lie,
          connect with our resourcefulness and capabilities we can make the best of our personal as well as professional lives.
          <br />
          <br />
          I am an eternal student of Astrology;
          its insights are as endless as the universe and there is always a new topic to dive into.
          I have studied at The Faculty of Astrology Studies and London School of Astrology
          (LSA) and have enjoyed giving astrology readings for years.
          <br />
          <br />
          <em>
            "The Meaning of Life is to find your purpose. The purpose of life is to then give it away."
            <br />
            -Pablo Picasso
          </em>
        </Typography>
      </div>
    </div >

  )
}

export default Home