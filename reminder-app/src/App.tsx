import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ReminderList from './components/ReminderList';
import ReminderService from './services/reminder';
import Reminder from "./model/Reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    try {
      const remindersData = await ReminderService.getReminders();
      setReminders(remindersData);
    } catch (error) {
      console.error('Error loading reminders:', error);
    }
  }

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
