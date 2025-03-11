function getDayOfWeek() {
 let date = prompt("Please enter the date (1-31):"); let month = prompt("Please enter the month (1-12):"); let year = prompt("Please enter the year (e.g., 2025):");
    
      let inputDate = new Date(year, month - 1, date);
    
    
    
     if (inputDate.getFullYear() == year && inputDate.getMonth() == month - 1 && inputDate.getDate() == date) { let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];let dayOfWeek = daysOfWeek[inputDate.getDay()];
    
     alert(`The day of the week for ${year}-${month}-${date} is ${dayOfWeek}.`); } else {alert("Invalid date. Please enter a valid date, month, and year."); }
    }
    
    
    getDayOfWeek();