import {Button, Card, Container, IconButton, TextField, Typography} from "../components";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {PlusIcon} from "@heroicons/react/20/solid";
import {saveSticky} from "../redux/actions/StickyAction";


function StickyWall() {
    const stickyNotes = useAppSelector(x => x.sticky);
    const [showNewCard, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const [values, setValues] = useState<any>({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]: value});
    };

    const handleSave = () => {
        dispatch(saveSticky(values))
            .finally(
                () => setShow(false)
            );
    }

    const stickyNote = (title: string, description: string, isNew: boolean) => (
        <Card className="p-4 !bg-amber-100">
            <TextField
                name="title"
                onChange={handleChange}
                placeholder="Başlık"
                value={title}
                className="border-transparent bg-transparent mb-1 font-bold text-xl py-1 hover:border-black"/>
            <TextField
                name="description"
                onChange={handleChange}
                placeholder="Açıklama"
                value={description}
                rows={8} className="border-transparent bg-transparent font-medium hover:border-black"/>
            {isNew && <Button variant="outlined" onClick={handleSave} className="mt-3 w-full">Kaydet</Button>}
        </Card>
    )

    const addNote = () => (
        <Card className="p-4 !bg-gray-100">
            <IconButton className="w-full !rounded-none" onClick={() => setShow(true)}>
                <PlusIcon className="h-52 w-52 mx-auto"/>
            </IconButton>
        </Card>
    )

    return(
        <Container>
            <Typography variant="h1" className="text-5xl font-bold my-10">
                Yapışkan Notlar
            </Typography>

            <Card className="p-8 mx-auto hover:bg-transparent">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {stickyNotes.map((item: any) => (
                        stickyNote(item.title, item.description, false)
                    ))}
                    {showNewCard ? stickyNote(values.title, values.description, true) : addNote()}
                </div>
            </Card>
        </Container>
    )
}

export default StickyWall;
