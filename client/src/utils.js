module.exports = {
  convertHourNumberToString: (hour) => {
    return Math.floor(hour)+":"+(hour%1===0.5 ? "30": "00")
  },
  getReadableDate: (date) => {
    if (!date) return ""
    let d = date.getDate()
    let m = date.getMonth() + 1
    let y = date.getFullYear()
    return `${d}/${m}/${y}`
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
  }
}