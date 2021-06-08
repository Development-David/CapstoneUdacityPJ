function isEmpty(str) {
    return (!str || 0 === str.length);
}
function checkDate(date){
    const days = (new Date(date) - new Date())/ (1000 * 60 * 60 * 24);
    return parseInt(days, 10);
}
function addDays(days) {
    var result
    result = new Date()
    result.setDate(result.getDate() + days)
    result = formatDate(result)
    return result
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export { isEmpty, checkDate,addDays };