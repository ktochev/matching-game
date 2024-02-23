export const styles = {
    list: {
        border: '1px solid gray',
        borderRadius: '0.5rem',
        flex: '0 1 30%'
    },
    listItem: {
        '& :hover': {
            cursor: 'pointer',
            backgroundColor: '#dddbdb',
        },
        paddingX: 0,
    },
    listItemText: {
        textAlign: 'center'
    }
}