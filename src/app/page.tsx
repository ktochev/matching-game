import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap="10rem"
      alignItems="center"
      justifyContent="center">
      <Typography variant="h1" textAlign="center">Welcome to my matching game!</Typography>
      <Button variant="outlined" href="/game">Start new game</Button>
    </Box>
  );
}
