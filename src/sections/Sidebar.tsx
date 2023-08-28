import React, {useState} from "react";
import {Drawer, IconButton, Stack, Typography} from "../components";
import {Bars3Icon} from "@heroicons/react/20/solid";

function Sidebar() {
    const [open, setOpen] = useState(true);

    const classes = open ? " translate-x-52" : ""

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <Drawer open={open} direction="left" className="min-w-[300px]">
                <Stack direction="row" spacing="auto" itemsCenter>
                    <Typography variant="h1" className="text-xl font-bold">
                        Menu
                    </Typography>
                </Stack>
            </Drawer>

            <div className={"absolute top-7 left-7 transition-all duration-700" + classes}>
                <IconButton onClick={handleOpen}>
                    <Bars3Icon className="h-6 w-6 text-gray-500"/>
                </IconButton>
            </div>
        </>
    )
}

export default Sidebar;
