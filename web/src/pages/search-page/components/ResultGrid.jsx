import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ResultItem } from "./ResultItem";
import _ from 'lodash'
import { styled } from "@mui/material/styles";
import { findStories } from "@services/SearchService";


export function ResultGrid() {
      let itemList = _.map(findStories(10),(data, idx)=>{return <Grid2 key={idx} xs={12}><ResultItem key={idx} data={data}/></Grid2>})

    return (
        <Grid2 container spacing={2}> 
            {itemList}
        </Grid2>
    )
}