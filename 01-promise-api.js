// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('проміс виконався успішно, з результатом (виконано, fulfilled)');
//     }
//     reject('проміс виконався з помилкою (відхилений, rejected)');
//   }, 1000);
// });

// // promise.then(
// //   result => {
// //     console.log(result);
// //   },
// //   error => {
// //     console.log(error);
// //   }
// // );

// // аналогічно

// // promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// // ланцюжок промісів(chaining)

// // promise
// //   .then(result => {
// //     console.log(result);

// //     return 5;
// //   })
// //   .then(x => {
// //     console.log(x);

// //     return 10;
// //   })
// //   .then(y => {
// //     console.log(y);
// //   });

// // promise
// //   .then(onFulfilled, onRejected)
// //   .then(
// //     x => {
// //       console.log(x);

// //       return 10;
// //     },
// //     error => console.log(error)
// //   )
// //   .then(
// //     y => console.log(y),
// //     error => console.log(error)
// //   );

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     throw new Error('помилка у другому промісі');

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error));

/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 1000);
});

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду выполнен в любом случае'));
