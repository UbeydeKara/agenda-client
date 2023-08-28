import React, {useState} from "react";
import {Drawer, IconButton, Stack, Typography} from "../components";
import {Bars3Icon} from "@heroicons/react/20/solid";

function Sidebar() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Drawer open={open} direction="left" className="w-3/12 max-w-[300px]">
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-bold">
                    Menu
                </Typography>

                <IconButton onClick={handleClose}>
                    <Bars3Icon className="h-6 w-6 text-gray-500"/>
                </IconButton>
            </Stack>
        </Drawer>
    )
}

export default Sidebar;
