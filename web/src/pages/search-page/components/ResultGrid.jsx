import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ResultItem } from "./ResultItem";
import _ from 'lodash'
import { styled } from "@mui/material/styles";


export function ResultGrid() {
      let itemList = _.times(60,(num)=>{return <Grid2 key={num} xs={12}><ResultItem key={num} name={"Item"+num}/></Grid2>})

    return (
        <Grid2 container spacing={2}> 
            {itemList}
        </Grid2>
    )
}