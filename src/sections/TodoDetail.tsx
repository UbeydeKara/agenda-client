import React from "react";
import {Drawer, Typography} from "../components";
import {useAppSelector} from "../redux/hooks";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);

    return(
        <Drawer open={Boolean(selectedTodo)}>
            <Typography variant="h1">
                {selectedTodo?.content}
            </Typography>
        </Drawer>
    )
}

export default TodoDetail;
