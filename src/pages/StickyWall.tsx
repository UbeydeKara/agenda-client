import {Card, Container, TextField, Typography} from "../components";
import React from "react";

const StickyNote = (
    <Card className="p-4 !bg-amber-100">
        <TextField value="Social Media" className="border-transparent bg-transparent mb-1 font-bold text-xl py-1 hover:border-black"/>
        <TextField
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit."
            rows={8} className="border-transparent bg-transparent font-medium hover:border-black"/>
    </Card>
)

function StickyWall() {
    return(
        <Container>
            <Typography variant="h1" className="text-5xl font-bold my-10">
                Yapışkan Notlar
            </Typography>

            <Card className="p-8 mx-auto hover:bg-transparent">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {StickyNote}
                    {StickyNote}
                    {StickyNote}
                    {StickyNote}
                    {StickyNote}
                </div>
            </Card>
        </Container>
    )
}

export default StickyWall;
