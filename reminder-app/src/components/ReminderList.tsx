import React from 'react';
import Reminder from "../model/Reminder"

interface ReminderListProps{
    items:Reminder[]
}
function ReminderList(prop:ReminderListProps) {
    return (
        <div>
           <ul>
            {prop.items.map(item => <li key={item.id}>{item.title}</li>)}
            </ul> 
        </div>
    );
}

export default ReminderList;