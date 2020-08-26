const fs = require("fs");
const Promise = require("bluebird");


Promise.promisifyAll(fs);

let readDemo = () => {
  const filePath1 = "C:/Users/akshay/Desktop/akshay/MEAN/node js/nodejs day3/demo.txt";

 
  const mpromise = fs.readFileAsync(filePath1, { encoding: "utf-8" });
  console.log(mpromise);

  
  mpromise.then((data) => {
    console.log(data);
  });

  mpromise.catch((err) => {
    console.log(err);
  });
};

readDemo();