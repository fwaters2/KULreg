import React from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core';

export default function Experience() {
    return (
        <React.Fragment>
            <Typography variant="h4">How much Ultimate have you played?</Typography>
        <Button variant="contained" fullWidth>Newbie</Button><br/>
        <Button variant="contained" fullWidth>Somewhere in the middle</Button><br/>
        <Button variant="contained" fullWidth>Legend in these Parts</Button>
        
        </React.Fragment>
    )
}
