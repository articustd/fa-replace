import React, { useState } from "react";
import { Card, CardContent, Typography, Paper, Avatar } from "@mui/material";
import test from '@assets/images/raindrago.jpg'

export function ResultItem(props) {
    return (
        <Card>
            <CardContent>
                <Avatar src="/assets/images/raindrago.jpg"/>
                <Typography>
                    {props.data.title}
                </Typography>
            </CardContent>
        </Card>
    )
}