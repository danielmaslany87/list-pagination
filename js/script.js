// GLOBALS
const pageDiv = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
const students = studentList.children;
const maxStudentsPerPage = 10;

// Creating  pagination elements in the global scope so that the listener can follow
const paginationDiv = document.createElement('div');
const ul = document.createElement('ul');
paginationDiv.className = 'pagination';
paginationDiv.appendChild(ul);
pageDiv.appendChild(paginationDiv);

// Show page function
const showPage = (list, page) => {
    for (let i = 0; i < list.length; i += 1) {
        if (page === 1) {
            if (i >= (page - 1) && i <= ((page * maxStudentsPerPage)) - 1) {
                list[i].style.display = '';
            } else {
                list[i].style.display = 'none';
            }
        } else if (page !== 1) {
            if (i >= ((page * 10) - 10) && i <= ((page * 10)) - 1) {
                list[i].style.display = '';
            } else {
                list[i].style.display = 'none';
            }
        }
    }

};
/* Dynamically creating link based on the size of the list,
and appending the to the elements declared in the global */
const appendPageLinks = (list) => {
    const pages = Math.ceil((list.length) / maxStudentsPerPage);
    for (let i = 0; i < pages; i += 1) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#';
        a.textContent = (i + 1).toString();
        li.appendChild(a);
        ul.appendChild(li);
    }
};

// Using "event bubbling" to catch any click that may occur on any page link in the div
paginationDiv.addEventListener('click', (e) => {
   let number = e.target.textContent;
   showPage(students, number);
});

// // Creating the search bar for EXCEEDS EXPECTATION
// const searchField = document.createElement('div');
// const searchInput = document.createElement('input');
// const searchButton = document.createElement('button');
// searchField.className = 'student-search';
// searchInput.placeholder = 'Search for students...';
// searchButton.innerText = 'Search';
// searchField.appendChild(searchInput);
// searchField.appendChild(searchButton);
// pageHeader.appendChild(searchField);

// const search = document.querySelector('.student-search').lastChild;
// search.addEventListener('click', () => {
//    const input = search.previousSibling.value;
//    let result = studentList.querySelectorAll('h3');
//    for (let i = 0; students.length; i += 1) {
//        if (result[i].textContent === input) {
//            console.log(result[i].textContent);
//            console.log(i);
//        }
//    }
//
// });



// Calling the script
showPage(students, 1);
appendPageLinks(students);