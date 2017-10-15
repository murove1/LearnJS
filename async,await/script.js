'use strict'

const URL = 'https://jsonplaceholder.typicode.com';
const POSTS = '/users';

async function getUsers() {
    let res = await fetch(URL + POSTS);
    let data = await res.json();

    return data;
};

async function showUsers() {
    let users = await getUsers();
    let usersContainer = document.getElementById('users');

    users.forEach(function(user) {
        usersContainer.innerHTML += '<div class="user">' + '<span class="userId"> userId:' + user.id + '</span>' + '<span class="userEmail"> userEmail:' + user.email + '</span>' + '<h1>' + user.name + '</h1>' + '</div>';
    });
};

document.getElementById('loadUsers').onclick = showUsers;