import React from 'react';
import Reminder from "../model/Reminder"

interface ReminderListProps{
    items:Reminder[]
}
function ReminderList(prop:ReminderListProps) {
    return (
           <ul className='list-group m-4 p-4'>
            {prop.items.map(item => <li key={item.id} className='list-group-item'>{item.title}</li>)}
            </ul> 
    );
}

export default ReminderList;