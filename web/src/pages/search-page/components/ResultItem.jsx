import React, { useState } from "react";
import { Card, CardContent, Typography, Paper } from "@mui/material";

export function ResultItem(props) {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    )
}