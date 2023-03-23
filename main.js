// alert(`-----MENU-----\n
// 1.   Data reading\n
// 2.   Create object\n
// 3.   Show object\n
// 4.   Create array\n
// 5.   Show array\n
// 6.   Remove the first element from array\n
// 7.   Remove last element from array\n
// 8.   Remove any element from array\n
// 9.   Add element to beginning of array\n
// 10.  Add element to end of array\n
// 11.  Create array with objects\n
// 12.  Iterate array with objects with FOR\n
// 13.  Iterate array with objects with ForEach\n
// 14.  Iterate array with objects with Map and create copy personal process\n
// 15.  Personal process\n
// 0.   Exit`)




let data = "";
let object = {};
let array = [];
let arrayOfObjects = [];

function readData() {
    data = prompt("Enter some data:");
    console.log(data);
}
function createObject() {
    const key = prompt("Enter a key:");
    const value = prompt("Enter a value:");
    object = { [key]: value };
    console.log(object);
}
function showObject() {
    alert(JSON.stringify(object));
}
function createArray() {
    const length = prompt("Enter the length of the array:");
    array = Array.from({ length }, () => prompt("Enter an element:"));
}
function showArray() {
    alert(JSON.stringify(array));
    array.forEach((element) => {
        console.log(element);
    });
}
function deleteFirstElement() {
    array.shift();
}
function deleteLastElement() {
    array.pop();
}
function deleteElement() {
    const index = prompt("Enter the index of the element to delete:");
    array.splice(index, 1);
}
function addToBeginning() {
    const element = prompt("Enter an element to add to the beginning:");
    array.unshift(element);
}
function addToEnd() {
    const element = prompt("Enter an element to add to the end:");
    array.push(element);
}
function createArrayOfObjects() {
    let objType = "";
    let objKeys = [];
    while (objType !== "exit") {
        objType = prompt("Enter object type ('exit' to quit):");
        if (objType === "exit") {
            break;
        }
        objKeys = prompt("Enter object keys separated by commas without space:").split(",");
        const newObject = {};
        objKeys.forEach((key) => {
            const value = prompt(`Enter ${key} value:`);
            newObject[key] = value;
        });
        arrayOfObjects.push({ type: objType, data: newObject });
    }
}
function displayArrayOfObjectsForLoop() {
    console.log("Array of Objects:");
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`Object ${i}: ${arrayOfObjects[i].type}`);
        const keys = Object.keys(arrayOfObjects[i].data);
        for (let j = 0; j < keys.length; j++) {
            console.log(`  ${keys[j]}: ${arrayOfObjects[i].data[keys[j]]}`);
        }
    }
}
function displayArrayOfObjectsForEach() {
    console.log("Array of Objects:");
    arrayOfObjects.forEach((obj, index) => {
        console.log(`Object ${index}: ${obj.type}`);
        Object.keys(obj.data).forEach((key) => {
            console.log(`  ${key}: ${obj.data[key]}`);
        });
    });
}
function displayArrayOfObjectsWithMap() {
    const mappedArray = arrayOfObjects.map((obj, index) => {
        const newObj = {};
        newObj["Type"] = obj.type;
        Object.keys(obj.data).forEach((key) => {
            newObj[key] = obj.data[key];
        });
        return newObj;
    });
    console.log("Mapped Array of Objects:");
    console.log(mappedArray);
}
function something() {
    console.log("nothing for now");
}

 while (true) {
     let menu = '';
     menu += "1. Leer Datos\n";
     menu += "2. Crear Objeto\n";
     menu += "3. Mostrar Objeto\n";
     menu += "4. Crear Array\n";
     menu += "5. Mostrar Array\n";
     menu += "6. Eliminar primer elemento del Array\n";
     menu += "7. Eliminar ultimo elemento del Array\n";
     menu += "8. Eliminar cualquier elemento del Array\n";
     menu += "9. Agregar elemento al inicio del Array\n";
     menu += "10. Agregar elemento al final del array\n";
     menu += "11. Crear array con objetos\n";
     menu += "12. Iterar array con objetos usando For\n";
     menu += "13. Iterar array con objetos usando ForEach\n";
     menu += "14. Iterar array con objetos usando Map\n";
     menu += "15. Proceso personal\n";
     menu += "0. Salir\n"

     let choose = prompt(menu);

    
     switch (choose) {
         case "1":
             readData();
             break;
         case "2":
             createObject();
         case "3":
             showObject();
             break;
         case "4":
             createArray();
         case "5":
             showArray();
             break;
         case "6":
             deleteFirstElement();
         case "7":
             deleteLastElement();
             break;
         case "8":
             deleteElement();
             break;
         case "9":
             addToBeginning();
             break;
         case "10":
             addToEnd();
             break;
         case "11":
             createArrayOfObjects();
             break;
         case "12":
             displayArrayOfObjectsForLoop();
             break;
         case "13":
             displayArrayOfObjectsForEach();
             break;
         case "14":
             displayArrayOfObjectsWithMap();
             break;
         case "15":
             something();
             break;
         case "0":
             break;
     }
 }
