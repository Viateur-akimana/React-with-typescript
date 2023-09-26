import axios from "axios";
import Reminder from "../model/Reminder"


class ReminderService{
  http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
  })

 async  getReminders(){
    let response = await this.http.get<Reminder[]>('/todos')
  return response.data;
  }

  async addReminder(title:string){
     let response = await this.http.post('/todos',{title})
     return response.data;
  }
  async removeReminder(id:number){
const response = await this.http.delete('/todos' + id);
return response.data;
  }
}
// eslint-disable-next-line
export default new ReminderService();