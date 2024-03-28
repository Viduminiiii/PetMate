const dbconfig = require("./config/db.config");
var express = require("express");
require("dotenv").config();
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");

//const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT } = process.env;
const { PUBLISHABLE_KEY, CLIENT_SECRET_KEY, PORT } = process.env;
// const stripe = require('stripe')(PUBLISHABLE_KEY);
const stripe = require("stripe")(
  "sk_test_51OwpvSSDj3zXuJENZB9N0Iru93O4s5BW0Hv5HawCnqFgYhcYPFoIHmjLferh6CdjDqqWeh6NoDGIbBWuhDqvFXBK00eVLJ8Djp"
);

// const stripe = require('stripe')(PUBLISHABLE_KEY, {
//   apiVersion: "2023-10-16"});

const base = "https://api-m.sandbox.paypal.com";

// host static files
app.use(express.static("client"));

app.use(cors());
app.use(express.json());

const port = PORT || 5001;
const portenv = PORT;
console.log(
  "port:   " + portenv + " - " + PUBLISHABLE_KEY + " - " + CLIENT_SECRET_KEY
);

const mongoUrl = dbconfig.url;
// const mongoUrl = 'mongodb+srv://admin:admin@petmate.ssqjitl.mongodb.net/?retryWrites=true&w=majority&appName=PetMate'
//                  'mongodb+srv://admin:admin@petmate.ssqjitl.mongodb.net/?retryWrites=true&w=majority&appName=PetMate'
console.log("configfile.url: " + mongoUrl);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("database connected.");
  })
  .catch((e) => {
    console.log(e);
  });

require("./Models/PetOwner").default;
require("./Models/Users").default;
require("./Models/Veternarian").default;
require("./Models/Pharmacy").default;
require("./Models/Availability").default;
require("./Models/Appointments").default;
require("./Models/PrescriptionSendDetails").default;
require("./Models/Messages").default;

const PetOwner = mongoose.model("PetOwner");
const User = mongoose.model("Users");
const Veternarian = mongoose.model("Veternarian");
const Pharmacy = mongoose.model("Pharmacy");
const Availability = mongoose.model("Availability");
const Appointments = mongoose.model("Appointments");
const PrescriptionSendDetails = mongoose.model("PrescriptionSendDetails");
const Messages = mongoose.model("Messages");
("");
app.get("/getTest", (req, res) => {
  res.send("success ---------------------------");
});

app.get("/getAllUser", async (req, res) => {
  User.find()
    .populate("petOwner")
    .then((result) => {
      if (result) {
        console.log(result);
        res.send({ status: "ok", data: JSON.stringify(result) });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post("/register", async (req, res) => {
  console.log("req.body:   " + JSON.stringify(req.body));
  const { fullname, email, password, petname, age, username } = req.body;
  const oldPetEmail = await PetOwner.findOne({ email: email });
  const oldVetEmail = await Veternarian.findOne({ email: email });
  const oldPharEmail = await Pharmacy.findOne({ email: email });
  const oldUser = await User.findOne({ username: username });

  if (oldPetEmail !== null || oldVetEmail !== null || oldPharEmail !== null) {
    res.send({ data: "Email already exists!!" });
  } else if (oldUser !== null) {
    res.send({ data: "User already exists!!" });
  } else {
    console.log("1");
    try {
      const objPet = await PetOwner.create({
        fullname: fullname,
        email: email,
        petname: petname,
        age,
      });
      const user = await User.create({
        username: username,
        password: password,
        petOwner: objPet._id,
      });

      if (objPet !== null && user !== null) {
        res.send({ status: "ok", data: "User created" });
      }
    } catch (error) {
      res.send({ status: "Error", data: error });
    }
  }
});

app.post("/registerVet", async (req, res) => {
  console.log("--------------req.body:   " + JSON.stringify(req.body));
  const {
    fullname,
    username,
    email,
    password,
    veterinaryClinicName,
    veterinaryLicenseNumber,
    veterinaryClinicAddress,
    mainCity,
    location,
  } = req.body;
  const oldPetEmail = await PetOwner.findOne({ email: email });
  const oldVetEmail = await Veternarian.findOne({ email: email });
  const oldPharEmail = await Pharmacy.findOne({ email: email });
  const oldUser = await User.findOne({ username: username });

  if (oldPetEmail !== null || oldVetEmail !== null || oldPharEmail !== null) {
    res.send({ data: "Email already exists!!" });
  } else if (oldUser !== null) {
    res.send({ data: "User already exists!!" });
  } else {
    try {
      console.log("2");
      const objVet = await Veternarian.create({
        fullname: fullname,
        email: email,
        veterinaryClinicName: veterinaryClinicName,
        veterinaryLicenseNumber: veterinaryLicenseNumber,
        veterinaryClinicAddress: veterinaryClinicAddress,
        mainCity: mainCity,
        location: location,
        createdDate: new Date(),
      });
      console.log("Veternarian:   " + Veternarian);
      const user = await User.create({
        username: username,
        password: password,
        Veternarian: objVet._id,
        createdDate: new Date(),
      });

      if (objVet !== null && user !== null) {
        console.log("user created");
        res.send({ status: "ok", data: "User created" });
      }
    } catch (error) {
      res.send({ status: "Error", data: error });
    }
  }
});

app.post("/registerPharmacy", async (req, res) => {
  console.log("req.body:   " + JSON.stringify(req.body));
  const {
    fullname,
    username,
    email,
    password,
    pharmacyName,
    pharmacyLicenseNumber,
    pharmacyAddress,
  } = req.body;
  const oldPetEmail = await PetOwner.findOne({ email: email });
  const oldVetEmail = await Veternarian.findOne({ email: email });
  const oldPharEmail = await Pharmacy.findOne({ email: email });
  const oldUser = await User.findOne({ username: username });

  if (oldPetEmail !== null || oldVetEmail !== null || oldPharEmail !== null) {
    res.send({ data: "Email already exists!!" });
  } else if (oldUser !== null) {
    res.send({ data: "User already exists!!" });
  } else {
    try {
      console.log("3");
      const objPharmacy = await Pharmacy.create({
        fullname: fullname,
        email: email,
        pharmacyName: pharmacyName,
        pharmacyLicenseNumber: pharmacyLicenseNumber,
        pharmacyAddress: pharmacyAddress,
        createdDate: new Date(),
      });
      const user = await User.create({
        username: username,
        password: password,
        Pharmacy: objPharmacy._id,
        createdDate: new Date(),
      });

      if (objPharmacy !== null && user !== null) {
        res.send({ status: "ok", data: "User created" });
      }
    } catch (error) {
      res.send({ status: "Error", data: error });
    }
  }
});

app.post("/getOneUser", async (req, res) => {
  console.log("req.body:   " + JSON.stringify(req.body));
  const { username, password } = req.body;
  console.log("assigned");
  await User.findOne({ username: username }).then((result) => {
    try {
      console.log("result:   " + JSON.stringify(result));
      if (result) {
        console.log(result);
        if (result !== null) {
          const match = result.password === password;
          console.log("match:  " + match);
          if (match) {
            const resultData = {
              userID: result._id,
              username: result.username,
              userLevel:
                result.petOwner !== undefined
                  ? "1"
                  : result.Veternarian !== undefined
                  ? "2"
                  : result.Pharmacy !== undefined
                  ? "3"
                  : "0",
              userLevelId:
                result.petOwner !== undefined
                  ? result.petOwner._id
                  : result.Veternarian !== undefined
                  ? result.Veternarian._id
                  : result.Pharmacy !== undefined
                  ? result.Pharmacy._id
                  : "0",
            };

            res.send({
              status: "ok",
              data: resultData,
            });
          } else {
            res.send({
              status: "match false",
              data: "Password did not match.",
            });
          }
        } else {
          res.send({ status: "ok", data: "User password did not matched." });
        }
      } else {
        res.status(404).send("Username password not found.");
      }
    } catch (error) {
      console.log("res.status:  " + res.status);
      res.send({ status: "Error", data: error });
    }
  });
});

app.get("/users/:userId/:usertype", (req, res) => {
  console.log("users------------------------");
  const loggedInUserId = req.params.userId;
  const loggedInUserType = req.params.usertype;

  const query = {
    _id: { $ne: loggedInUserId },
    Veternarian: { $ne: null },
  };
  const query2 = {
    _id: { $ne: loggedInUserId },
    petOwner: { $ne: null },
  };

  console.log("-----------loggedInUserType:   " + loggedInUserType);

  if (loggedInUserType === "1") {
    console.log("-----------1--------------");
    User.find(query)
      .select("_id username")
      .populate({
        path: "Veternarian",
        select: "fullname veterinaryClinicName email",
      })
      .then((users) => {
        console.log("users:   " + JSON.stringify(users));
        res.send(JSON.stringify(users));
        // res.status(200).json(users);
      })
      .catch((err) => {
        console.log("Error retrieving users", err);
        res.send({ status: 500, message: "Error retrieving users" });
      });
  } else {
    // console.log("-----------2--------------");
    User.find(query2)
      .select("_id username")
      .populate({
        path: "petOwner",
        select: "fullname petname email",
      })
      .then((users) => {
        console.log("users:   " + JSON.stringify(users));
        res.send(JSON.stringify(users));
        // res.status(200).json(users);
      })
      .catch((err) => {
        console.log("Error retrieving users", err);
        res.send({ status: 500, message: "Error retrieving users" });
      });
  }
});

app.post("/availability", async (req, res) => {
  console.log("-------- req.body availability:   " + JSON.stringify(req.body));
  const {
    availableDate,
    timeFrom,
    timeTo,
    noofPatients,

    doctorCharges,
    serviceCharges,
    vet_id,
  } = req.body;
  try {
    const availability = await Availability.create({
      availableDate: availableDate,
      timeFrom: timeFrom,
      timeTo: timeTo,
      noofPatients: noofPatients,

      doctorCharges: doctorCharges,
      serviceCharges: serviceCharges,
      createdDate: new Date(),
      veternarian: vet_id,
    });

    if (availability !== null) {
      console.log("OK done.");
      res.send({ status: "ok", data: "Availability created" });
    }
  } catch (error) {
    res.send({ status: "Error", data: error });
  }
});

app.post("/vetAvailability", async (req, res) => {
  console.log("-------------REQ BODY" + JSON.stringify(req.body));
  const { vet_id } = req.body; // Assuming vet ID is passed as a query parameter
  console.log("vet_id:   " + vet_id);
  try {
    const vetAvailabilities = await Availability.find({ veternarian: vet_id })
      .select(
        "_id availableDate timeFrom timeTo noofPatients doctorCharges serviceCharges"
      )
      .populate({
        path: "veternarian",
        select: "fullname veterinaryClinicName veterinaryClinicAddress",
      });
    // const vetAvailabilities = (await Availability.find({ veternarian: vet_id }).populate('veternarian'));
    console.log("availabilities: " + JSON.stringify(vetAvailabilities));
    if (vetAvailabilities && vetAvailabilities.length > 0) {
      res.send(JSON.stringify(vetAvailabilities));
    } else {
      console.log("Status:    " + res.status);
      res.status(404).send("Date Data not found.");
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});

app.post("/searchAvailability", async (req, res) => {
  console.log("searchAvailability response-----------------------");
  const { searchDate, searchDoctor, searchClinic } = req.body; // Assuming the date is passed as a query parameter

  try {
    const date = searchDate !== "" ? new Date(searchDate) : null;
    const regexVet = new RegExp(searchDoctor, "i"); // 'i' flag for case-insensitive matching
    const regexClinic = new RegExp(searchClinic, "i"); // 'i' flag for case-insensitive matching

    console.log("----------- response----------------------- 1");
    let dateAvailabilities;
    if (date !== null) {
      console.log("----------- response----------------------- 2");
      dateAvailabilities = await Availability.find({
        availableDate: {
          $gte: new Date(new Date(date).setHours(0, 0, 0)),
          $lt: new Date(new Date(date).setHours(23, 59, 59)),
        },
      })
        .populate({
          path: "veternarian",
          match: { fullname: regexVet, veterinaryClinicName: regexClinic },
          select: "fullname",
        })
        .exec();
    } else {
      console.log("----------- response----------------------- 3");
      const filterAvailabilities = await Availability.find()
        .populate({
          path: "veternarian",
          match: { fullname: regexVet, veterinaryClinicName: regexClinic },
          select: "fullname",
        })
        .exec();

      if (filterAvailabilities && filterAvailabilities.length) {
        dateAvailabilities = filterAvailabilities.filter((a) => a.veternarian);
      }
    }
    // console.log("availabilities: " + JSON.stringify(dateAvailabilities));
    if (dateAvailabilities && dateAvailabilities.length > 0) {
      console.log("OK-------------------" + JSON.stringify(dateAvailabilities));
      res.send({
        status: "ok",
        msg: "Search success.",
        data: JSON.stringify(dateAvailabilities),
      });
    } else {
      res.send({
        status: "No Data found.",
        msg: "Data not found.",
      });
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});

///// STRIPE Start

function getKeys(keyType) {
  console.log("keyType:  " + keyType);
  let secret_key = CLIENT_SECRET_KEY;
  let publishable_key = PUBLISHABLE_KEY;
  switch (keyType) {
    case "secKey":
      secret_key = CLIENT_SECRET_KEY;
      break;
    case "pubKey":
      publishable_key = PUBLISHABLE_KEY;
      break;
  }
  return { secret_key, publishable_key };
}

app.get("/stripe-key", (req, res) => {
  console.log("--------------------stripe-key:   " + req.body);

  const { keyType } = getKeys(req.body);
  const { publishable_key } = getKeys(keyType);
  console.log("publishable_key:  " + publishable_key);

  return res.send({ data: publishable_key });
});

// const userID = async (username, res) => {
//   console.log("username:   " + username);
//   try {
//     const result = await User.findOne({ username: username });
//     console.log("result:   " + JSON.stringify(result._id));
//     if (result) {
//       res.send({ data: result._id });
//     } else {
//       res.send({ error: "User did not match." });
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     res.send({ error: "An error occurred while fetching user data." });
//   }
// };

async function GetUserID(username) {
  console.log("username:   " + username);
  try {
    const result = await User.findOne({ username: username });
    console.log("result:   " + JSON.stringify(result));
    const dataObject = JSON.parse(JSON.stringify(result));
    const userID = dataObject._id;
    if (userID) {
      console.log(" ---hhhh  " + userID);
      return userID;
    } else {
      console.log(" ---ddddd");
      return 0;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

app.post("/create-payment-intent", async (req, res) => {
  console.log("-create intent ");
  const { paymentMethodType, currency, orderAmount } = req.body;

  console.log("----1----  ");
  let params = {};
  params = {
    paymentMethodType: paymentMethodType,
    amount: orderAmount,
    currency: currency,
  };
  console.log("----2----  ");

  try {
    console.log("----3----  " + orderAmount + " - " + currency);
    // const paymentIntent = await stripe.paymentIntents.create(params)
    // .then((res) => {
    //   if(res)
    //   {console.log("res");}
    // });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log("----4----  " + JSON.stringify(paymentIntent));
    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


app.listen(port, () => {
  console.log("Mongo DB connection successful run in port: " + port);
});
