import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './grid.scss';

const blockName = 'grid-layout';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      justifyContent: "center",
    },
    paper: {
      height: 380,
      width: 300,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function SpacingGrid(props:any) {
  const [spacing, setSpacing] = React.useState<GridSpacing>(8);
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={8}>
        <Grid container justify="center" spacing={spacing}>

          { props.data.map((value: any) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div className={`${blockName}_content`}>
                    <a href={value.url}  > {value.title} </a> <br/>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>     
    </Grid>
  );
}
