import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const themeA = createMuiTheme({
  root: {
    backgroundColor: "#e06d4f",
  },

  palette: {
    primary: {
      main: "#e06d4f",
    },
    secondary: {
      main: "#73CEC5",
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome! As you match with survivors, their profiles will appear
                below. Click "reach out" to email a survivor and set up a call.
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {props.cards.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={props.survivorPhotos[index]}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {props.survivorNames[index]}
                      </Typography>
                      <Typography color="secondary" align="center" gutterBottom>
                        Status: {props.statuses[index]}
                      </Typography>
                      <Typography>
                        County, California. Abuse last occured: Date.
                      </Typography>
                      <Typography>Cannot afford legal fees.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={function () {
                          props.setViewProfile(true);
                          props.setSurvivorName(props.survivorNames[index]);
                          props.setSurvivorImage(props.survivorPhotos[index]);
                          props.setSurvivorIndex(index);
                          props.setStatus(index, "viewed");
                        }}
                      >
                        View Profile
                      </Button>
                      <Button size="small" color="primary">
                        Reach Out
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          ></Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </ThemeProvider>
  );
}