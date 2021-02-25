let p1 = new Promise(resolve => {
    setTimeout(resolve, 2000, 'first feedback');
  }); 
let p2 = new Promise(resolve => {
  setTimeout(resolve, 1000, 'second feedback');
}); 

Promise.all([p1, p2]).then(result => { 
    result.every(item => !!item === true) && console.log('оба ответа получены');
});
