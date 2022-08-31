"use strict";

const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => data.filter(usr => usr.company?.name === 'Johns Group').forEach(usr => console.log(usr)))
  .catch(err => console.error(err.message));