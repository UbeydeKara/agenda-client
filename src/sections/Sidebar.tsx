import React, {useState} from "react";
import {Card, Drawer, IconButton, List, ListItem2, Stack, Typography} from "../components";
import {
    Bars3Icon,
    ChevronDoubleRightIcon,
    ListBulletIcon,
    PencilSquareIcon, PlusIcon
} from "@heroicons/react/20/solid";
import {toggleLeftDrawer} from "../redux/actions/UIActions";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {Link} from "react-router-dom";
import ListCreator from "./ListCreator";

function Sidebar() {
    const {todoList} = useAppSelector(x => x.list);
    const {leftDrawerOpen} = useAppSelector(x => x.ui);
    const categories = useAppSelector(x => x.category);

    const [listMenuOpen, setListOpen] = useState(false);

    const dispatch = useAppDispatch();

    const classes = leftDrawerOpen ? " translate-x-52" : ""

    const handleToggle = () => {
        dispatch(toggleLeftDrawer(!leftDrawerOpen));
    }

    return (
        <>
            <Drawer open={leftDrawerOpen} direction="left" className="w-[300px]">
                <Stack spacing={8} className="h-full">
                    <Typography variant="h1" className="text-xl font-bold">
                        Menu
                    </Typography>
                    <List title="Etkinlikler">

                        <Link to="/list/upcoming">
                            <ListItem2 className="text-gray-600 text-sm"
                                       startIcon={<ChevronDoubleRightIcon className="h-5 w-5 text-gray-500"/>}
                                       endIcon={<Card className="px-3 py-py">{todoList.length}</Card>}>
                                Yaklaşan
                            </ListItem2>
                        </Link>

                        <Link to="/list/today">
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

                    <List title="Listeler">
                        {categories?.map((item: any, index: number) => (
                            <ListItem2
                                key={index}
                                className="text-gray-600 text-sm"
                                startIcon={
                                    <div className={`h-4 w-4 ${item.colorCode} rounded`}/>
                                }
                                endIcon={<Card className="px-3 py-py bg-gray-200 font-bold text-xs">5</Card>}>
                                    {item.name}
                            </ListItem2>
                        ))}

                        <ListItem2 className="text-gray-600 text-sm" onClick={() => setListOpen(true)}
                                      startIcon={<PlusIcon className="h-5 w-5 text-gray-500"/>}>
                        Yeni Liste Ekle
                        </ListItem2>

                        {/* List creator menu */}
                        <ListCreator open={listMenuOpen} setOpen={setListOpen}/>

                    </List>
                </Stack>
            </Drawer>

            {/* Toggle menu */}
            <div className={"absolute top-7 left-7 z-10 transition-all duration-700" + classes}>
                <IconButton onClick={handleToggle}>
                    <Bars3Icon className="h-6 w-6 text-gray-500"/>
                </IconButton>
            </div>
        </>
    )
}

export default Sidebar;
