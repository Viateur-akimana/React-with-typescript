import React from 'react';
import Reminder from "../model/Reminder"

interface ReminderListProps{
    items:Reminder[],
    onRemoveReminder:(id:number)=>void;
}
const removeReminder =  (id:number)=>{
  console.log(id)
}
function ReminderList({items,onRemoveReminder}:ReminderListProps) {
    return (
           <ul className='list-group m-4 p-4'>
            {items.map(item => <li key={item.id} className='list-group-item fs-1.4em '>
                {item.title}
                <div className="btn btn-outline-danger mx-3 rounded-pill" onClick={()=> removeReminder(item.id)}>Delete</div>
                </li>
                )
                }
            </ul> 
    );
}

export default ReminderList;