import { useEffect, useState } from "react";
import Search from "../search/Search";
import UserPagination from "./user-list/user-pagination/UserPagination";
import UserList from "./user-list/UserSection";
import UserAdd from "./user-list/user-add/UserAdd";

const baseUrl = 'http://localhost:3030/jsonstore/';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}users`);
                const result = await response.json();
                const users = Object.values(result);

                setUsers(users);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSaveData = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userFormData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userFormData),
        });

        const newUser = await response.json();

        setUsers(oldUsers => [...oldUsers, newUser]);

        setShowAddUser(false);
    }

    return (
        <section className="card users-container">

            <Search />
            <UserList users={users} />
            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveData}
                />)
            }
            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
            <UserPagination />

        </section>
    );
}