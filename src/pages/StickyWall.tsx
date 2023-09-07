import {Button, Card, Container, Form, Grid, IconButton, Stack, TextField, Typography} from "../components";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {PlusIcon} from "@heroicons/react/20/solid";
import {saveSticky} from "../redux/actions/StickyAction";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {stickyColors, stickyFormSchema, stickyInitialValues} from "../constants";
import Fade from "../transitions/Fade";


function StickyWall() {
    const stickyNotes = useAppSelector(x => x.sticky);
    const [showNewCard, setShow] = useState(false);
    const dispatch = useAppDispatch();

    const methods = useForm({
        resolver: yupResolver(stickyFormSchema),
        defaultValues: stickyInitialValues,
        mode: "all"
    });

    const {
        reset,
    } = methods;

    const handleSave = (values: any) => {
        dispatch(saveSticky(values))
            .finally(
                () => {
                    setShow(false);
                    reset();
                }
            );
    }

    const closePopup = () => {
        reset();
        setShow(false);
    }

    const stickyNote = (index: number, title: string, description: string, isNew: boolean) => (
        <Card key={index} className={`p-4 w-full aspect-square ${stickyColors[index % stickyColors.length]}`}>
            <Typography className="mb-1 font-bold text-xl py-1">
                {title}
            </Typography>
            <Typography variant="p" className="break-words">
                {description}
            </Typography>
            {isNew && <Button type="submit" variant="outlined" className="mt-3 w-full">Kaydet</Button>}
        </Card>
    )

    const addNote = () => (
        <Card className="p-4 relative w-full aspect-square !bg-gray-100">
            <Fade appear={!showNewCard}>
                <IconButton className="w-full h-full absolute !rounded" onClick={() => setShow(true)}>
                    <PlusIcon className="h-24 w-24 mx-auto"/>
                </IconButton>
            </Fade>
            <Fade appear={showNewCard}>
                <div className="absolute top-4 bottom-4 left-4 right-4">
                    <TextField
                        name="title"
                        placeholder="Başlık"
                        className="bg-transparent font-medium text-xl py-1"/>
                    <TextField
                        name="description"
                        placeholder="Açıklama"
                        rows={7} className="bg-transparent mt-2 font-medium text-lg"/>
                    <Stack direction="row">
                        <Button variant="outlined" className="mt-3 w-full" small onClick={closePopup}>İptal</Button>
                        <Button type="submit" variant="contained" className="mt-3 w-full" small>Kaydet</Button>
                    </Stack>
                </div>
            </Fade>
        </Card>
    )

    return(
        <Container>
            <Typography variant="h1" className="text-5xl font-bold my-8">
                Yapışkan Notlar
            </Typography>

            <Card className="p-8 mx-auto hover:bg-transparent">
                <Form methods={methods} onSave={handleSave}>
                    <Grid spacing={8}>
                        {stickyNotes.map((item: any, index: number) => (
                            stickyNote(index, item.title, item.description, false)
                        ))}
                        {addNote()}
                    </Grid>
                </Form>
            </Card>
        </Container>
    )
}

export default StickyWall;
