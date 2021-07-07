import React from 'react';
import './Protfolio.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 900,
        marginTop: 100,
    },
});

export default function Protfolio() {
    const classes = useStyles();
    const STYLE = { width: "1800px", height: "678px" }
    const ICONSSTYLE = { color: "black", display: "flex", justifyContent: "center" }

    return (
        <div className="cardDiv" >
            <img src="/portfolio/pro.jpeg" alt="" className="proPic" style={STYLE} />
            <div className="cardTextDiv" >
                <Card className={classes.root} >
                    <CardActionArea style={{ backgroundImage: "url(https://media.istockphoto.com/photos/paper-texture-white-background-of-crumpled-old-paper-card-with-blank-picture-id1058849314)", backgroundSize: "cover" }} >
                        <CardMedia
                            component="img"
                            height="300PX"
                            image="/portfolio/web1.png"
                        />
                        <CardContent>
            
                            <a href="https://github.com/sigalavera/Car" target="blanc">
                                <Button size="small" color="black" >
                                    GIT
                                    <GitHubIcon style={ICONSSTYLE} />

                                </Button>
                            </a>
                            <a href=" https://sigalavera.github.io/Car/" target="blanc">
                                <Button size="small" color="black">
                                    WEB
                                    <WebIcon style={ICONSSTYLE} />
                                </Button>
                            </a>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <Card className={classes.root} >
                    <CardActionArea style={{ backgroundImage: "url(https://media.istockphoto.com/photos/paper-texture-white-background-of-crumpled-old-paper-card-with-blank-picture-id1058849314)", backgroundSize: "cover" }} >
                        <CardMedia
                            component="img"
                            height="300PX"
                            image="/portfolio/web2.png"
                        />
                        <CardContent>
          
                            <a href="https://github.com/sigalavera/Car" target="blanc">
                                <Button size="small" color="black" >
                                    GIT
                                    <GitHubIcon style={ICONSSTYLE} />

                                </Button>
                            </a>
                            <a href=" https://sigalavera.github.io/Car/" target="blanc">
                                <Button size="small" color="black">
                                    WEB
                                    <WebIcon style={ICONSSTYLE} />
                                </Button>
                            </a>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <Card className={classes.root} >
                    <CardActionArea style={{ backgroundImage: "url(https://media.istockphoto.com/photos/paper-texture-white-background-of-crumpled-old-paper-card-with-blank-picture-id1058849314)", backgroundSize: "cover" }} >
                        <CardMedia
                            component="img"
                            height="300PX"
                            image="/portfolio/web3.jpeg"
                        />
                        <CardContent>
                     
                            <a href="https://github.com/sigalavera/Car" target="blanc">
                                <Button size="small" color="black" >
                                    GIT
                                    <GitHubIcon style={ICONSSTYLE} />

                                </Button>
                            </a>
                            <a href=" https://sigalavera.github.io/Car/" target="blanc">
                                <Button size="small" color="black">
                                    WEB
                                    <WebIcon style={ICONSSTYLE} />
                                </Button>
                            </a>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>

    );
}
