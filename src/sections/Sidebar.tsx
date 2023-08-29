import React, {useState} from "react";
import {Card, Drawer, IconButton, List, ListItem2, Stack, Typography} from "../components";
import {Bars3Icon, ChevronDoubleRightIcon, ListBulletIcon} from "@heroicons/react/20/solid";

function Sidebar() {
    const [open, setOpen] = useState(true);

    const classes = open ? " translate-x-52" : ""

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <Drawer open={open} direction="left" className="min-w-[300px] max-w-[300px] overflow-y-auto">
                <Stack spacing={8} className="h-full">
                    <Typography variant="h1" className="text-xl font-bold">
                        Menu
                    </Typography>
                    <List title="Etkinlikler" className="flex-grow">
                        <ListItem2 className="text-gray-600 text-sm"
                                   startIcon={<ChevronDoubleRightIcon className="h-5 w-5 text-gray-500"/>}
                                   endIcon={<Card className="px-3 py-py">5</Card>}>
                            Yaklaşan
                        </ListItem2>
                        <ListItem2 className="text-gray-600 text-sm"
                                   startIcon={<ListBulletIcon className="h-4 w-5 text-gray-500"/>}
                                   endIcon={<Card className="px-3 py-py">2</Card>}>
                            Bugün
                        </ListItem2>
                    </List>
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
