'use client'
import React, { FC, useContext, useMemo } from 'react';
import { Alert, Box, Button, Typography } from "@mui/material";
import { ScoreContext } from '@/providers/score.provider';

const Results: FC = () => {
    const scoreContext = useContext(ScoreContext);

    const resultText = useMemo(() => {
        const score = scoreContext?.score;

        if (!score) return '';

        if (score >= 50) {
            return 'Excellent! You\'re a geography whiz!'
        }

        if (score >= 30 && score < 50) {
            return 'Good job!';
        }

        return 'Better luck next time!'
    }, [scoreContext?.score])

    if (!scoreContext?.score) {
        return (
            <Typography variant='h1' textAlign="center">No results yet!</Typography>
        )
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            rowGap="3rem"
            alignItems="center">
            <Typography variant='h6'>Result: {scoreContext?.score} points</Typography>

            {resultText && (
                <Alert severity="info">{resultText}</Alert>
            )}

            <Button variant="outlined" href="/game">Start new game</Button>
        </Box>
    )
}

export default Results;