import React from 'react';
import {Container, Drawer, Stack, Typography} from "./components";
import {TodoList} from "./sections";

function App() {
    return (
        <>
            <Container className="h-screen">
                <Stack direction="column" justifyCenter spacing={10} className="h-full px-20">

                    <Typography variant="h1" className="text-5xl font-bold">
                        Görevlerim
                    </Typography>

                    <TodoList/>

                    <Drawer>
                        <Typography variant="h1">
                            Başlık
                        </Typography>
                    </Drawer>
                </Stack>
            </Container>
        </>
    );
}

export default App;
