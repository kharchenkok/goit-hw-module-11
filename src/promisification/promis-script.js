// ========================task-01====================================

// const { resolve } = require("core-js/fn/promise");

// const delay = ms => {
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(ms)
//         },ms)
//     })
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Виклич функції для перевірки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

//   ===============================task-2================================
// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію 
// callback, а приймала всього два параметри allUsers і userName і повертала проміс.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
    return new Promise(resolve=> resolve(updatedUsers))
};

const logger = updatedUsers => console.table(updatedUsers);

/*
//  * Зараз працює так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
//  * Повинно працювати так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
  