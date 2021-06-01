import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './index.scss';
const useStyles = makeStyles({
    root: {
        margin: 20,
        height: '100%',
    },
    courseOverview: {
        justifyContent: 'space-between'
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { courseName, imageAddress, moduleCount = 5 } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea className="course-about">
                <div className="hover-buttons">
                    <Button size="small" className="take-exam" onClick={(e) => e.preventDefault()}>
                        Take Exam
                    </Button>
                    <Button size="small" className="download-certificate" onClick={(e) => e.preventDefault()}>
                        Download Certificate
                </Button>
                </div>
                <CardMedia
                    className="card-media"
                    image={imageAddress}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {courseName}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.courseOverview}>
                <Button size="small" color="#fff">
                    {`${moduleCount} modules`}
                </Button>
                <Button size="small" color='#fff'>
                    Certificate
                </Button>
            </CardActions>
        </Card>
    );
}
