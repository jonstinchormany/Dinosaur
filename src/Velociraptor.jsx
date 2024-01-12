import * as React from 'react';
import { styled } from '@mui/material/styles';
import Traptor from "./assets/Traptor.jpg";
import Sraptor from "./assets/Sraptor.png";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Velociraptor.css";
function Velociraptor(props) {
        return (
                <div>
                Whoa, this works?

                <div className = "VelociText"><h1><main>Paleontologists found Velociraptor fossils in central Asia and China, with related species in the Southern and Northern Americas, unlike the movies portray, the fossils suggest that it was a small carnivorous theropod with feathers. it's one large claw on both feet was used to slash at prey, and it was able to stay balanced thanks to it's tail.</main></h1>

                        
                
                </div>

                <Grid container spacing={2} columns={16}>
                  <Grid item xs={2}>
                    <img className = "Traptor" src = {Traptor} />xs=2</Grid>img className = "Traptor" src = {Traptor} />
                  </Grid>
                  <Grid item xs={2}>
                    <img className = "Sraptor" src = {Sraptor} />xs=2</Grid>img className = "Sraptor" src = {Sraptor} />
                </div>
        );
}
export default Velociraptor;