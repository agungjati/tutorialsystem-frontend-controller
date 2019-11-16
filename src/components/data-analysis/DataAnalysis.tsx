import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Grid, Typography, Container } from "@material-ui/core";
import "./DataAnalysis.css";

const data =   {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [2000, 7000, 5000, 9000, 7000, 4000]
      }
    ]
  };


export default class DataAnalysis extends Component{
  render() {
      
    return (
        <Container>
        <Grid container className="data-analysis">
            <Grid item className="list-video">
                <img src="/assets/recomended-thumbnail.jpg" className="thumbnail" alt="recomended-thumbnail.jpg"  />
                <Typography variant="h6" gutterBottom>
                    Your Videos
                </Typography>
                <Typography variant="body1" className="decsription">
                    Belajar NodeJS #1<br/>
                    Pengenalan Dasar NodeJS (untuk pemula)
                </Typography>
            </Grid>
            <Grid item xs className="chart-analysis">
                <Grid item style={{height: "300px"}}>
                    <Line data={data}
                        options={{ maintainAspectRatio: false }}
                    />
                </Grid>
                <Grid container item xs spacing={3} >
                    <Grid item xs>
                        <div className="card-analysis">
                            <Typography variant="subtitle1" className="title">Number of shares</Typography>
                            <Typography variant="caption" className="subtitlte" gutterBottom>the number of shares</Typography>
                            <Typography variant="h6">6.320</Typography>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="card-analysis">
                            <Typography variant="subtitle1" className="title">Added to playlist</Typography>
                            <Typography variant="caption" className="subtitlte" gutterBottom>add the video to their palylist</Typography>
                            <Typography variant="h6">86.420</Typography>
                        </div>
                        <div className="card-analysis">
                            <Typography variant="subtitle1" className="title">Added to watch later</Typography>
                            <Typography variant="caption" className="subtitlte" gutterBottom>add the video to watch later</Typography>
                            <Typography variant="h6">5.930</Typography>
                        </div>
                        <div className="card-analysis">
                            <Typography variant="subtitle1" className="title">Number of comments</Typography>
                            <Typography variant="caption" className="subtitlte" gutterBottom>the number of comments</Typography>
                            <Typography variant="h6">300</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Container>
    )
  }
}
