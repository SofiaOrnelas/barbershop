module.exports = {
  convertHourNumberToString: (hour) => {
    return Math.floor(hour)+":"+(hour%1===0.5 ? "30": "00")
  },
  getReadableDate: (date) => {
    if (!date) return ""
    if (typeof date === "string") date = new Date(date)
    let d = date.getDate()
    if (d < 10) d = "0"+d
    let m = date.getMonth() + 1
    if (m < 10) m = "0"+m
    let y = date.getFullYear()
    let s = "Sun"
    if (date.getDay() === 1) s = "Mon"
    if (date.getDay() === 2) s = "Tue"
    if (date.getDay() === 3) s = "Wed"
    if (date.getDay() === 4) s = "Thu"
    if (date.getDay() === 5) s = "Fri"
    if (date.getDay() === 6) s = "Sat"
    return `${s} ${d}/${m}`
  },
  // Compare 2 dates / strings
  // Return true of there are from the same day
  // Example: date1="2019-05-12 09:45", date2=new Date("2019-05-12 12:12") => true
  // Example: date1="2019-05-16 09:45", date2=new Date("2019-05-12") => false
  checkIfSameDays: (date1, date2) => {
    if (typeof date1 === "string") date1 = new Date(date1)
    if (typeof date2 === "string") date2 = new Date(date2)
    return date1.getDate() === date2.getDate() 
      && date1.getMonth() === date2.getMonth() 
      && date1.getFullYear() === date2.getFullYear() 
  },
  checkIfSameWeeks: (date1, date2) => {
    if (typeof date1 === "string") date1 = new Date(date1)
    if (typeof date2 === "string") date2 = new Date(date2)
    return true
  },
}