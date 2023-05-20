'use strict'


// https://reqres.in/api/unknown მოცემული ლინკიდან წამოიღეთ name + color;

let request = new XMLHttpRequest();

request.addEventListener('load', function () {
    let receivedInfo = request.responseText;
    let receivedInfoJS = JSON.parse(receivedInfo);

    let ulInfo = document.createElement('ul');

    receivedInfoJS.data.forEach((element) => {
        let li = document.createElement('li');

        let nameUser = document.createElement('p');
        nameUser.textContent = `${element.name}`;

        let colorUser = document.createElement('img');
        colorUser.setAttribute('src', `${element.color}`)


        ulInfo.appendChild(li);
        li.appendChild(nameUser);
        li.appendChild(colorUser);

    })
    document.getElementById('dataDiv').appendChild(ulInfo);
});

request.open('GET', 'https://reqres.in/api/unknown');
request.send();




// https://reqres.in/api/users?page=2 წამოიღეთ სახელი, გვარი, email;


let getrequest = new XMLHttpRequest();

getrequest.addEventListener('load', function () {
    let rcvInfo = getrequest.responseText;
    let rcvInfoJS = JSON.parse(rcvInfo);

    let ulinfoJS = document.createElement('ul');

    rcvInfoJS.data.forEach((element) => {
        let li = document.createElement('li');

        let nameUser = document.createElement('p');
        nameUser.textContent = `${element.first_name}`;

        let lastNameUser = document.createElement('p');
        lastNameUser.textContent = `${element.last_name}`

        let userEmail = document.createElement('p');

        userEmail.textContent = `${element.email}`




        ulinfoJS.appendChild(li);
        li.append(lastNameUser);
        li.appendChild(nameUser);
        li.appendChild(userEmail);

    })
    document.getElementById('jsonDiv').appendChild(ulinfoJS);
});

getrequest.open('GET', 'https://reqres.in/api/users?page=2');
getrequest.send();


