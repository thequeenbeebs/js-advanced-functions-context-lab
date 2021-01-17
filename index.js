/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(empArray) {
    let newEmp = {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newEmp
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map( e => createEmployeeRecord(e))
}

function createTimeInEvent(dateStamp) {
    let newRecord = {
        type: "TimeIn",
        hour: +dateStamp.split(" ")[1],
        date: dateStamp.split(" ")[0]
    }
    this.timeInEvents.push(newRecord)
    return this
}

function createTimeOutEvent(dateStamp) {
    let newRecord = {
        type: "TimeOut",
        hour: +dateStamp.split(" ")[1],
        date: dateStamp.split(" ")[0]
    }
    this.timeOutEvents.push(newRecord)
    return this
}

function hoursWorkedOnDate(date) {
    let timeInEvent = this.timeInEvents.find(e => e.date === date)
    let timeOutEvent = this.timeOutEvents.find(e => e.date === date)
    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName)
}

function calculatePayroll(srcArray) {
    let payroll = 0
    srcArray.forEach(emp => {
        console.log(emp)
        payroll += allWagesFor.call(emp)
    })
    return payroll
}