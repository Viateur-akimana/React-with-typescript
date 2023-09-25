import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ReminderList from './components/ReminderList';
import ReminderService from './services/ReminderService';

function App() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    LoadReminders();
  }, []);

  const LoadReminders = async () => {
    try {
      const reminder = await ReminderService.getReminder();
      setReminders(reminder);
    } catch (error) {
      console.error('Error loading reminders:', error);
    }
  };

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
