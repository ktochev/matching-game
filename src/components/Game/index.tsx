'use client'
import React, { FC, useContext, useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { sleep } from '@/utils/sleep.util';
import { ScoreContext } from '@/providers/score.provider';
import { useRouter } from 'next/navigation'
import ItemsList from '../ItemsList';
import { CORRECT_ANWER_PTS, INCORRECT_ANWER_PTS } from '@/constants/common.const';
import { GuessType } from '@/typings/guess.type';

interface IGameProps {
    capitals: string[];
    countries: string[];
    countriesMap: Map<string, string>;
}

const Game: FC<IGameProps> = ({
    capitals,
    countries,
    countriesMap
}) => {
    const [points, setPoints] = useState(30);
    const [capitalsList, setCapitalsList] = useState(capitals);
    const [countriesList, setCountriesList] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState<string>();
    const [selectedCapital, setSelectedCapital] = useState<string>();
    const [guessStatus, setGuessStatus] = useState<GuessType>();

    const router = useRouter();

    const scoreContext = useContext(ScoreContext);

    const updateCountriesAndCapitalsLists = () => {
        setCapitalsList((prevData) =>
            prevData?.filter((currentCapital) => currentCapital !== selectedCapital)
        );

        setCountriesList((prevData) =>
            prevData?.filter((currentCountry) => currentCountry !== selectedCountry)
        );
    }

    const updateCountriesAndCapitals = () => {
        setSelectedCountry(undefined);
        setSelectedCapital(undefined);
    }

    useEffect(() => {
        const hasEverythingGuessed = countriesList?.length === 0;

        if (hasEverythingGuessed) {
            scoreContext?.setScore(points);

            router.push('/results');
        }

    }, [countriesList]);

    const handleSuccessfulGuess = async () => {
        setPoints(points + CORRECT_ANWER_PTS);
        setGuessStatus('correct');

        await sleep(1000);

        updateCountriesAndCapitalsLists();
        updateCountriesAndCapitals();
        setGuessStatus(undefined);
    }

    const handleUnsuccessfulGuess = async () => {
        setPoints(points + INCORRECT_ANWER_PTS);
        setGuessStatus('incorrect');

        await sleep(1000);
        updateCountriesAndCapitals();
        setGuessStatus(undefined);
    }

    useEffect(() => {
        if (selectedCountry && selectedCapital) {
            if (countriesMap.get(selectedCountry) === selectedCapital) {
                handleSuccessfulGuess();
                return;
            }

            handleUnsuccessfulGuess();
        }
    }, [selectedCountry, selectedCapital])

    return (
        <>
            <Typography
                variant='body1'
                marginBottom="2rem"
                textAlign="center">
                Match the country with its corresponding capital!
            </Typography>

            <Box display="flex" justifyContent="space-around" columnGap="2rem">
                <ItemsList
                    items={countriesList}
                    selectedItem={selectedCountry}
                    guessStatus={guessStatus}
                    handleItemClick={(country) => setSelectedCountry(country)} />

                <ItemsList
                    items={capitalsList}
                    selectedItem={selectedCapital}
                    guessStatus={guessStatus}
                    handleItemClick={(capital) => setSelectedCapital(capital)} />
            </Box>
        </>
    )
}

export default Game;