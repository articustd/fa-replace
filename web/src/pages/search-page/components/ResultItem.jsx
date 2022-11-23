import React, { useState } from "react";
import { Card, CardContent, Typography, Paper, Avatar, Box, Divider, Chip, CardMedia } from "@mui/material";
import book from '@assets/images/book.png'
import user from '@assets/images/raindrago.jpg'

export function ResultItem(props) {
    let tags = _.map(props.data.tags, (tag)=> {return <Chip label={`${tag}`}/>})
    return (
        <Card>
            
            <Box display={"flex"}>
            <Avatar src="/assets/images/raindrago.jpg" sx={{ width: "3em", height: "3em", position: "absolute", marginLeft: "-35px" }}/>
                <img class="result-image" src="/assets/images/book.png" />
                <Box p={1} flex={'auto'} display={"flex"} flexGrow="1" flexDirection={"column"} width={"100%"}>
                    <Box p={1} flex={'auto'} flexGrow="1"><Typography variant="h5">{props.data.title}</Typography></Box>
                    <Box p={1} flex={'auto'}  flexGrow="1"><Typography>{props.data.short_desc}</Typography></Box>
                    <Divider />
                    <Box p={0.5} display={"flex"} flex={'auto'} flexGrow="1" >
                        <Box p={1} display={"flex"} flex={"auto"} flexGrow="3" alignItems={"center"}><Typography>{props.data.published_date}</Typography></Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box p={1} display={"flex"} flex={"auto"} flexGrow="10"  alignItems={"center"}>{tags}</Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box p={1} display={"flex"} flex={"auto"} alignItems={"center"}><Typography>Favs {props.data.favorited}</Typography></Box>
                    </Box>
                </Box>
            </Box>

            {/* <CardContent>
                <Avatar src="/assets/images/raindrago.jpg"/>
                <Typography>
                    {props.data.title}
                </Typography>
            </CardContent> */}
        </Card>
    )
}