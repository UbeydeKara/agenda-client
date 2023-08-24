import React from 'react';
import {Container, Image, Stack, Typography} from "./components";

function App() {
  return (
      <Container className="h-screen">
          <Stack direction="column" itemsCenter justifyCenter spacing={2} className="h-full v-full">
              <Image src="/logo192.png" alt="logo"/>
              <Typography variant="h1" className="text-3xl font-bold">
                  Agenda Todo App
              </Typography>
          </Stack>
      </Container>
  );
}

export default App;
