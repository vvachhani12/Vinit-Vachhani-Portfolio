var connection = require("../config/connection.js");

var orm = {

  //// this will select all available cars 
  selectAllCars: function (cb) {
    var queryString = "SELECT * FROM cars";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result)
      console.log(result);
    });
  },
  //// this will select cars of a certain make 

  selectWhere: function (carMake, cb) {
    var queryString = "SELECT * FROM cars WHERE car_Make = ?";
    connection.query(queryString, carMake,
      function (err, result) {

        if (err) throw err;
        cb(result)
        console.log(result);
      });
  },


// adding a car to the database
//CREATE CAR FUNCTION IN ORM.JS
  createCar: function(carYear, carMake, carModel, transmission, startDate, endDate, miles, carImg, carRate, availability, condition, cb) {
    console.log("inside createCar function of orm.js")
    var queryString = "INSERT INTO cars SET ?";
    console.log(queryString);
    connection.query(queryString,
        {
          car_Year: carYear,
          car_Make: carMake,
          car_Model: carModel, 
          transmission_Type: transmission,
          start_DA: startDate,
          end_DA: endDate, 
          car_Miles: miles,
          car_Availabilty: availability,
          car_Rates: carRate,
          car_Condition: condition,
          car_ImageURL: carImg
        },
        function(err, result) {
          // jemall added console.log below
      if (err) throw err;
      cb(result)
      console.log(result);
    });
  },

  //updating the availabilty of a car 
  //   all submissions need to be in this format '2018-01-01'

  updateAvail: function (startDate, endDate, thisID, cb) {
    var queryString = "UPDATE cars SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString,

      [{
        start_DA: startDate,
        end_DA: endDate,
      },
      {
        id: thisID,
      }
      ],


      function (err, result) {
        if (err) throw err;
        cb(result)
        console.log(result);
      });
  },

  getAllMake: function (cb) {
    var queryString = "SELECT DISTINCT car_Make FROM cars ORDER BY car_Make ASC";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },

  getAllModel: function (carMake, cb) {
    var queryString = "SELECT DISTINCT car_Model FROM cars WHERE ?";
    console.log(queryString);
    connection.query(queryString,
        {
          car_Make: carMake
        },
      function (err, result) {
        if (err) throw err;
        cb(result);
        console.log(result);
      });

  },

  getUserByObject: function(obj, cb) {
    let queryString = "SELECT * FROM users WHERE ?";
    // console.log(queryString);
    // console.log(obj);
    connection.query(queryString,
      obj , function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result[0]);
      });
  },

  createUser: function(newUser, cb) {
    let queryString = "INSERT INTO users SET ?";
    console.log(queryString);
    connection.query(queryString,
      {
        Password: newUser.password,
        Name: newUser.name,
        Lastname: newUser.lastname,
        Email: newUser.email
      },
      function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
  }
};
module.exports = orm;