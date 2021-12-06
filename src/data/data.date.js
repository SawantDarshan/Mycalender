export class Calender {
  constructor(year) {
    this.year = year;
  }
  getCalender() {
    let allDays = [];
    for (let month = 0; month < 12; month++) {
      let temp = [];
      for (let day = 1; day <= 31; day++) {
        let newDate = new Date(this.year, month, day);
        temp.push(newDate);
      }
      allDays.push(temp);
    }
    return allDays.map((months) =>
      months.filter((day, index) => day.getDate() === index + 1)
    );
  }
  setTask(day, month, year,time, text,image) {
    localStorage.setItem(`${day}-${month}-${year}`, `${time}@${text}@${image}`);
  }
  getTask(day, month, year) {
    return localStorage.getItem(`${day}-${month}-${year}`);
  }
  getAlltask(list) {
    return list.map((month) =>
      month.map((date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return {date: date ,task: this.getTask(day, month, year)};
      })
    );
  }
}
// let newCalender = new Calender(2021);
// let list = newCalender.getCalender();
// let all = newCalender.getAlltask(list).map(month=>month.filter((day)=>{
//   return day.task
// }))

