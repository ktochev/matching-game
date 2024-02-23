"use client"

import React, { createContext, FC, useState, Dispatch, SetStateAction } from "react";

interface ScoreContextType {
    score: number | null;
    setScore: Dispatch<SetStateAction<number | null>>;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

interface ScoreProviderProps {
    children: React.ReactNode;
}

const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
    const [score, setScore] = useState<number | null>(null);

    const contextValue: ScoreContextType = {
        score,
        setScore,
    };

    return (
        <ScoreContext.Provider value={contextValue}>
            {children}
        </ScoreContext.Provider>
    );
};

export { ScoreProvider, ScoreContext };
