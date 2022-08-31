
const employee = {
    name: "Lee",
    streetAddress: "5811 Sherman Ave",
}
 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee }

    newEmployee[key] = value
    return newEmployee
}
 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value 
    return obj
}

function deleteFromEmployeeByKey (newEmployee, key, value) {
    newEmployee [key] = value
   delete newEmployee.key
    return employee.name = "Sam"
    
}

function destructivelyDeleteFromEmployeeByKey (obj, key, value) {
    obj [key] = value
return delete obj.key
}


