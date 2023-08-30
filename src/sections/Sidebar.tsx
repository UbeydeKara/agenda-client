import React, {useState} from "react";
import {Card, Drawer, IconButton, List, ListItem2, Stack, Typography} from "../components";
import {Bars3Icon, ChevronDoubleRightIcon, ListBulletIcon, PencilSquareIcon} from "@heroicons/react/20/solid";
import {toggleLeftDrawer, toggleRightDrawer} from "../redux/actions/UIActions";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {Link} from "react-router-dom";

function Sidebar() {
    const {leftDrawerOpen} = useAppSelector(x => x.ui);
    const dispatch = useAppDispatch();

    const classes = leftDrawerOpen ? " translate-x-52" : ""

    const handleToggle = () => {
        dispatch(toggleLeftDrawer(!leftDrawerOpen));
    }

    return(
        <>
            <Drawer open={leftDrawerOpen} direction="left" className="w-[300px]">
                <Stack spacing={8} className="h-full">
                    <Typography variant="h1" className="text-xl font-bold">
                        Menu
                    </Typography>
                    <List title="Etkinlikler" className="flex-grow">

                        <Link to="/list">
                            <ListItem2 className="text-gray-600 text-sm"
                                       startIcon={<ChevronDoubleRightIcon className="h-5 w-5 text-gray-500"/>}
                                       endIcon={<Card className="px-3 py-py">5</Card>}>
                                Yaklaşan
                            </ListItem2>
                        </Link>

                        <Link to="/list">
                            <ListItem2 className="text-gray-600 text-sm"
                                       startIcon={<ListBulletIcon className="h-4 w-5 text-gray-500"/>}
                                       endIcon={<Card className="px-3 py-py">2</Card>}>
                                Bugün
                            </ListItem2>
                        </Link>

                        <Link to="/sticky-wall">
                            <ListItem2 className="text-gray-600 text-sm"
                                       startIcon={<PencilSquareIcon className="h-4 w-5 text-gray-500"/>}
                                       endIcon={<Card className="px-3 py-py">2</Card>}>
                                Yapışkan Notlar
                            </ListItem2>
                        </Link>

                    </List>
                </Stack>
            </Drawer>

            <div className={"absolute top-7 left-7 z-10 transition-all duration-700" + classes}>
                <IconButton onClick={handleToggle}>
                    <Bars3Icon className="h-6 w-6 text-gray-500"/>
                </IconButton>
            </div>
        </>
    )
}

export default Sidebar;
