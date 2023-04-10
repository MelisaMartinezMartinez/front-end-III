import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from 'react-router-dom';

const Professional = ({professionals, dispatch, favs }) => {
  return (
    <div>
      {professionals.map((user) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={user.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "steelblue" }} aria-label="recipe">
                </Avatar>
              }
              title={user.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
              }
              alt="Doctors-Img"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Odonto Pediatra con amplia experiencia
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link to={`/dentista/${user.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}

export default Professional