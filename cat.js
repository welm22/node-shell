const fs = require('fs');

const cat = (arr) => {
  console.log(`./${arr[0]}`)
  fs.readFile(`./${arr[0]}`, (err,data) => {
    if(err) throw err;
    process.stdout.write(data);
    process.stdout.write("prompt >");
  })
}

module.exports = cat;
