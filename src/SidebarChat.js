import { AvTimer } from '@material-ui/icons';
import React, { useState,useEffect } from 'react';
import "./SidebarChat.css";
import {Avatar} from "@material-ui/core";
import db from './firebase'; 
import { Link } from "react-router-dom"; 
function SidebarChat({ id, name,  addNewChat}) {
    const [messages,setMessages]=useState("");
    useEffect(()=>{
    if(id){
        db.collection('rooms')
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>doc.data())))
    }

    },[id])
    const createChat = () => {
        const roomName= prompt("Please enter a room Name for chat");
        if(roomName)
        {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };
    return !addNewChat ? (
        <div class="outer">
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar/>
                <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
        </div>
    ): (
        <div onClick={createChat}
            className="sidebarChat">
            <h2 class="AddNewChat">Add Group</h2>
        </div>
    );
}

export default SidebarChat
