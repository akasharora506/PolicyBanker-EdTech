import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './index.scss';
import { useHistory } from 'react-router-dom';
export default function MediaCard(props) {
    const { courseName, imageAddress, moduleCount = 5, courseType } = props;
    const history = useHistory();
    return (
        <Card className="course-card">
            <CardActionArea className="course-about">
                <div className="hover-buttons">
                    <Button size="small" className="take-exam" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        history.push(`/${courseType}/exam`);
                    }}>
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
            <CardActions className="course-overview">
                <Button size="small" color="default">
                    {`${moduleCount} modules`}
                </Button>
                <Button size="small" color='default'>
                    Certificate
                </Button>
            </CardActions>
        </Card>
    );
}
