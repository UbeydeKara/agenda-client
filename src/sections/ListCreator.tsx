import {Card, Stack, TextField} from "../components";
import React, {useState} from "react";
import {rippleEffect} from "../utils/Ripple";
import {useAppDispatch} from "../redux/hooks";
import {saveCategory} from "../redux/actions/CategoryAction";
import Fade from "../transitions/Fade";
import {listColors} from "../constants";

interface IListCreator extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    setOpen: Function;
}

function ListCreator({open, setOpen}: IListCreator) {
    const [values, setValues] = useState<any>({
        colorCode: listColors[0]
    });
    const dispatch = useAppDispatch();

    const handleSave = (event: any) => {
        if (event.key === "Enter") {
            dispatch(saveCategory(values)).finally(handleClose);
        }
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]: value});
    };

    const handleClick = (event: any) => {
        setValues({...values, colorCode: event});
    };

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Fade open={open}>
            <Card className="!bg-transparent p-3 shadow-transparent">
                <TextField
                    name="name"
                    placeholder="Liste Adı"
                    className="!bg-transparent py-2"
                    inputAdornment={
                        <div className={`h-4 w-4 rounded transition-colors ${values.colorCode}`}/>
                    }
                    onChange={handleChange}
                    onKeyDown={handleSave}
                />

                <Stack direction="row" spacing={3} className="mt-4">
                    {listColors.map(color => (
                        <button
                            type="button"
                            key={color}
                            className={`h-4 w-4 rounded relative overflow-hidden ${color}`}
                            onClick={() => handleClick(color)}>
                            <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0"
                                 onMouseDown={rippleEffect}/>
                        </button>
                    ))}
                </Stack>
            </Card>
        </Fade>
    )
}

export default ListCreator;
