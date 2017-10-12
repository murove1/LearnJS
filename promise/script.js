'use strict'

const URL = 'https://jsonplaceholder.typicode.com';
const POSTS = '/posts';

const showPosts = (postsContainer) => (posts) => {
    posts.forEach((post) => {
        postsContainer.innerHTML += '<div class="post">' + '<span class="postid"> postid:' + post.id + '</span>' + '<span  class="userid"> userid:' + post.userId + '</span>' + '<h2>' + post.title + '</h2>' + '<p>' + post.body + '</p>' + '</div>';
    });
};

const getPosts = () => fetch(URL + POSTS);

const toJson = (res) => res.json();

const loadPosts = () => {
    let postsContainer = document.getElementById('posts');
    getPosts()
        .then(toJson)
        .then(showPosts(postsContainer));
};

document.getElementById('loadPosts').onclick = loadPosts;