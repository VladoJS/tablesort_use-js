let sortDirection = false;

// let personData = [
//     {age: 31},
//     {age: 27},
//     {age: 44},
//     {age: 99}
// ];

// window.onload = () => {
//     loadTableData(personData);
// };

// // создаю ф-ию которая будет выводить соджержимое массива на страницу
// // в аргумент закидываю массив - будет принимать туда его св-ва
// // цель этой ф-ии - выводить контент
// function loadTableData(personData) {
//     // получаю tableData по его ID

//     const tableBody = document.getElementById('tableData');
//     // создаю локальную переменную, кот собираюсь использовать

//     let dataHTML = '';

//     for(let person of personData) {
//         dataHTML += `<tr><td>${person.age}</td></tr>`;
//     }
//     console.log(dataHTML);

//     tableBody.innerHTML = dataHTML;
// }



let table = document.querySelector('#tableData');
let personData = [
        {age: 31},
        {age: 27},
        {age: 44},
        {age: 99}
    ];
// let personData = [[1,2], [4,5], [45,33], [9,10]];

fillTableData(table, personData);

function fillTableData(table, personData) {
    let th = document.createElement('th');
    table.appendChild(th); 
    th.innerHTML = 'AGE';
    for (let i = 0; i < personData.length; i++) {
        
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tr.appendChild(td);

            td.innerHTML = personData[i].age;
            tr.appendChild(td);
        
        
        
        table.appendChild(tr);
    }
}

let trs = document.querySelectorAll('tr');
let btn = document.querySelector('th');

btn.addEventListener('click', function() {
    console.log([...trs]);

   let sortArr = personData.sort(function(a, b) {
        return a - b;
        
    });
    console.log(sortArr);

    // let sorted = [...trs].sort(function(a, b) {
    //     return a.children[0].innerHTML - b.children[0].innerHTML;
    // });

    // // table.innerHTML = '';

    // for (let tr of sorted) {
    //     table.appendChild(tr);
    // }
});



// function sortColumn(columnName) {
//     const dataType = typeof personData[0][columnName];
//     sortDirection = !sortDirection;

//     switch(dataType) {
//         case 'number':
//             sortNumberColumn(sortDirection, columnName);
//             break;
//     }

//     fillTableData(personData);

// }

// function sortNumberColumn(sort, columnName) {
//     personData = personData.sort((p1, p2) => {
//         return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName];
//     });
// }