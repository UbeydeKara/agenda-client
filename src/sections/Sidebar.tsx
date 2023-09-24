import React, {useEffect, useMemo, useState} from "react";
import {Card, Drawer, IconButton, List, MenuItem, Stack, Typography} from "../components";
import {
    AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon,
    Bars3Icon,
    ChevronDoubleRightIcon,
    ListBulletIcon,
    PencilSquareIcon,
    PlusIcon
} from "@heroicons/react/20/solid";
import {toggleLeftDrawer} from "../redux/actions/UIActions";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {Link, useNavigate, useParams} from "react-router-dom";
import ListCreator from "./ListCreator";
import {routeRanges} from "../constants";
import {clickAway} from "../utils";
import {logout} from "../redux/actions/AuthAction";
import {useLocalStorage} from "../hooks";

const item = (isActive = false, to: string, title: string, icon: any, count: number) => (
    <Link key={to} to={to}>
        <MenuItem key={to} className={`${isActive ? "bg-gray-200" : "bg-gray-100"} text-gray-600 text-sm rounded`}
                  startIcon={icon}
                  endIcon={<Card className="px-3 py-[.2rem] bg-gray-200 font-bold text-xs">{count}</Card>}>
            {title}
        </MenuItem>
    </Link>
)

function Sidebar() {
    const {todoList, todoListByDate} = useAppSelector(x => x.list);
    const stickyNotes = useAppSelector(x => x.sticky);
    const {leftDrawerOpen} = useAppSelector(x => x.ui);
    const categories = useAppSelector(x => x.category);

    const [listMenuOpen, setListOpen] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user");

    const {range} = useParams();
    const currentRangeUrl = routeRanges[range as keyof typeof routeRanges || "sticky-wall"]?.url;

    const classes = leftDrawerOpen ? " translate-x-52" : ""

    const bars = useMemo(() => (
        [
            {
                to: "/list/upcoming",
                title: "Yaklaşan",
                icon: <ChevronDoubleRightIcon className="h-5 w-5 text-gray-500"/>,
                count: todoList.length
            },
            {
                to: "/list/today",
                title: "Bugün",
                icon: <ListBulletIcon className="h-4 w-5 text-gray-500"/>,
                count: todoListByDate.today.length
            },
            {
                to: "/sticky-wall",
                title: "Yapışkan Notlar",
                icon: <PencilSquareIcon className="h-4 w-5 text-gray-500"/>,
                count: stickyNotes.length
            },
        ]
    ), [todoList.length, todoListByDate.today.length, stickyNotes.length]);

    const handleToggle = () => {
        dispatch(toggleLeftDrawer(!leftDrawerOpen));
    }

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            setUser(null);
            navigate("/login")
        })
    }

    useEffect(() => {
        clickAway("listContainer", () => setListOpen(false));
    }, []);

    return (
        <>
            <Drawer open={leftDrawerOpen} direction="left" className="w-[300px]">
                <Stack spacing={8} className="h-full">
                    <Typography variant="h1" className="text-xl font-bold">
                        Menu
                    </Typography>
                    <List title="Etkinlikler">
                        {bars.map(x => (
                            item(x.to === currentRangeUrl, x.to, x.title, x.icon, x.count)
                        ))}
                    </List>

                    <List title="Listeler">
                        {categories?.map((item: any, index: number) => (
                            <MenuItem
                                key={index}
                                className="text-gray-600 text-sm"
                                startIcon={
                                    <div className={`h-4 w-4 ${item.colorCode} rounded`}/>
                                }
                                endIcon={<Card className="px-3 py-[.2rem] bg-gray-200 font-bold text-xs">5</Card>}>
                                    {item.name}
                            </MenuItem>
                        ))}

                        <Stack id="listContainer" spacing={3}>
                            <MenuItem className="text-gray-600 text-sm" onClick={() => setListOpen(true)}
                                      startIcon={<PlusIcon className="h-5 w-5 text-gray-500"/>}>
                                Yeni Liste Ekle
                            </MenuItem>

                            {/* List creator menu */}
                            <ListCreator open={listMenuOpen} setOpen={setListOpen}/>
                        </Stack>
                    </List>

                    {/*Settings and logout*/}
                    <Stack className="!mt-auto">
                        <List>
                            <MenuItem
                                className="text-gray-600 text-sm"
                                startIcon={<AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500"/>}>
                                Ayarlar
                            </MenuItem>

                            <MenuItem
                                className="text-gray-600 text-sm"
                                startIcon={<ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-500"/>}
                                onClick={handleLogout}>
                                Çıkış yap
                            </MenuItem>
                        </List>
                    </Stack>
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
