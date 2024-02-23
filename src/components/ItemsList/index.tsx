'use client'
import React, { FC } from 'react';
import { List, ListItem, ListItemText } from "@mui/material";
import { GuessType } from '@/typings/guess.type';
import { styles } from '@/styles/itemsList.styles';

interface IItemsListProps {
    items: string[];
    selectedItem?: string;
    guessStatus?: GuessType;
    handleItemClick: (item: string) => void;
}

const getBorderColor = (guess?: GuessType) => {
    switch (guess) {
        case 'correct':
            return '3px solid green';
        case 'incorrect':
            return '3px solid red';
        default:
            return '3px solid black';
    }
}

const ItemsList: FC<IItemsListProps> = ({
    items,
    selectedItem,
    guessStatus,
    handleItemClick
}) => {
    return (
        <List
            sx={styles.list}>
            {items?.map((item) => (
                <ListItem
                    onClick={() => handleItemClick(item)}
                    sx={{
                        ...styles.listItem,
                        border: item === selectedItem ? getBorderColor(guessStatus) : 'none',
                    }}>
                    <ListItemText
                        sx={styles.listItemText}
                        primary={item}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default ItemsList;