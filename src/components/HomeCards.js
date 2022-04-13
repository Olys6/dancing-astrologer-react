import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material/';

const HomeCards = () => {



  return (
    <div className="cards">
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard1 animate__animated animate__fadeInDown" >
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natal Chart Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is an in depth analysis of inherent talents and personal dynamics.
            </Typography>
            <hr />
            <Typography textAlign="center">90 Mins - 160CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard2 animate__animated animate__fadeInDown">
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Short Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              get a reading of the sun, moon and ascendant signs.
            </Typography>
            <hr />
            <Typography textAlign="center">25 Mins - 55CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard3 animate__animated animate__fadeInDown">
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natal Chart Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is an in depth analysis of inherent talents and personal dynamics.
            </Typography>
            <hr />
            <Typography textAlign="center">90 Mins - 160CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard4 animate__animated animate__fadeInDown">
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natal Chart Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is an in depth analysis of inherent talents and personal dynamics.
            </Typography>
            <hr />
            <Typography textAlign="center">90 Mins - 160CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard5 animate__animated animate__fadeInDown">
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natal Chart Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is an in depth analysis of inherent talents and personal dynamics.
            </Typography>
            <hr />
            <Typography textAlign="center">90 Mins - 160CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className="homeCard homeCard6 animate__animated animate__fadeInDown" >
        <CardActionArea href="/natalchartreading">
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/DKneEdu.png"
            alt="Natal Chart Reading picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natal Chart Reading
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is an in depth analysis of inherent talents and personal dynamics.
            </Typography>
            <hr />
            <Typography textAlign="center">90 Mins - 160CHF</Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default HomeCards