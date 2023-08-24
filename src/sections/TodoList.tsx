import {List, ListItem} from "../components";

function TodoList() {
    return(
        <List className="mt-4 w-52">
            <ListItem>Profile</ListItem>
            <ListItem>Settings</ListItem>
            <ListItem selected>Messages</ListItem>
            <ListItem>Download</ListItem>
        </List>
    )
}

export default TodoList;
