const dbconfig = require("./config/db.config");
var express = require("express");
require("dotenv").config();
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");

const { PUBLISHABLE_KEY, CLIENT_SECRET_KEY, PORT, STRIPE_KEY } = process.env;

const stripe = require("stripe")(STRIPE_KEY);

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
        createdDate: new Date(),
      });
      const user = await User.create({
        username: username,
        password: password,
        petOwner: objPet._id,
        createdDate: new Date(),
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
      console.log("3");
      const objPharmacy = await Pharmacy.create({
        fullname: fullname,
        email: email,
        pharmacyName: pharmacyName,
        pharmacyLicenseNumber: pharmacyLicenseNumber,
        pharmacyAddress: pharmacyAddress,
        mainCity: mainCity,
        location: location,
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
        res.send({
          status: 404,
          data: "Username or password not found.",
        });
        // res.status(404).send("Username password not found.");
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

app.get("/getUserData/:userId", async (req, res) => {
  console.log("\n\n -------user  params---:  " + JSON.stringify(req.params));

  const { userId } = req.params;
  console.log("assigned");
  await User.findById(userId).then(async (result) => {
    try {
      console.log("result:   " + JSON.stringify(result));
      if (result && result !== null) {
        const userLevel =
          result.petOwner !== undefined
            ? "1"
            : result.Veternarian !== undefined
            ? "2"
            : result.Pharmacy !== undefined
            ? "3"
            : "0";
        const userLevelId =
          result.petOwner !== undefined
            ? result.petOwner._id
            : result.Veternarian !== undefined
            ? result.Veternarian._id
            : result.Pharmacy !== undefined
            ? result.Pharmacy._id
            : "0";

        let resultData;

        
        if (userLevel == "1") {
          const petOwner = await PetOwner.findById(userLevelId);
          
          resultData = {
            username: result.username,
            fullName: petOwner.fullname,
            email: petOwner.email,
            petName: petOwner.petname,
            age: petOwner.age,
          };
        } else if (userLevel == "2") {
          const petOwner = await Veternarian.findById(userLevelId);
          resultData = {
            userID: result._id,
            username: result.username,
            fullName: petOwner.fullname,
            email: petOwner.email,
            veterinaryClinicName: petOwner.veterinaryClinicName,
            veterinaryLicenseNumber: petOwner.veterinaryLicenseNumber,
            veterinaryClinicAddress: petOwner.veterinaryClinicAddress,
            mainCity: petOwner.mainCity,
            location: petOwner.location,
          };
        } else if (userLevel == "3") {
          const petOwner = await Pharmacy.findById(userLevelId);
          resultData = {
            userID: result._id,
            username: result.username,
            fullName: petOwner.fullname,
            email: petOwner.email,
            pharmacyName: petOwner.pharmacyName,
            pharmacyLicenseNumber: petOwner.pharmacyLicenseNumber,
            pharmacyAddress: petOwner.pharmacyAddress,
            mainCity: petOwner.mainCity,
            location: petOwner.location,
          };
        }

        console.log("----resultData:  " + JSON.stringify(resultData));
        // res.send({ status: "ok", data: resultData, });
        return res.status(200).send(resultData);
      } else {
        return res.status(404).send("Data not found");
        // res.send({ status: 404, data: "Data not found." });
      }
    } catch (error) {
      console.log("res.status:  " + res.status);
      res.send({ status: "Error", data: error });
    }
  });
});

app.patch("/petOwnerProfileUpdate/:userID", async (req, res) => {
  try {
    console.log(
      "  ---userID: " +
        req.params.userID +
        "  -- req.body --  " +
        JSON.stringify(req.body)
    );
    const { fullName, email, password, petName, age, username } = req.body;
    const userData = await User.findById(req.params.userID);

    if (userData) {
      console.log(
        "  ----1---userData: " +
          JSON.stringify(userData) +
          " -  userData.petOwner   " +
          userData.petOwner
      );
      const filter = { _id: userData.petOwner };
      const update = {
        fullname: fullName,
        email: email,
        petname: petName,
        age: age,
      };

      const updatedUser = await PetOwner.findOneAndUpdate(filter, update, {
        new: true, // return the updated document
        runValidators: true, // validate before update
      });

      console.log("  ----2---userData: " + JSON.stringify(userData));
      if (!updatedUser) {
        console.log("  ----3---userData:error----------- ");
        return res.status(404).send({ message: "User not found" });
      }

      console.log("  ----4---updatedUser: " + JSON.stringify(updatedUser));
      res.status(200).send({ message: "User updated." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const multer = require("multer");

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/"); // Specify the desired destination folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//endpoint to post Messages and store it in the backend
app.post("/messages", upload.single("imageFile"), async (req, res) => {
  try {
    // console.log("\n\n -------messages---:  " + JSON.stringify(req.body));
    const { senderId, recepientId, messageType, messageText } = req.body;

    const newMessage = {
      senderId: senderId,
      recepientId: recepientId,
      messageType: messageType,
      message: messageText,
      imageUrl: messageType === "image" ? req.file.path : null,
      timestamp: new Date(),
    };
    const objMessages = await Messages.create(newMessage);

    if (objMessages !== null) {
      console.log("Message sent Successfully");
      res.send({ status: 200, data: "Message sent Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

///endpoint to get the userDetails to design the chat Room header
app.get("/user/:userId", async (req, res) => {
  console.log("\n\n -------user  params---:  " + JSON.stringify(req.params));
  try {
    const { userId } = req.params;

    //fetch the user data from the user ID
    const recepientId = await User.findById(userId);

    // res.json(recepientId);
    res.send(recepientId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//endpoint to fetch the messages between two users in the chatRoom
app.get("/messages/:senderId/:recepientId", async (req, res) => {
  console.log("\n\n -------params---:  " + JSON.stringify(req.params));
  try {
    const { senderId, recepientId } = req.params;

    const messages = await Messages.find({
      $or: [
        { senderId: senderId, recepientId: recepientId },
        { senderId: recepientId, recepientId: senderId },
      ],
    }).populate("senderId", "_id name");

    res.send(messages);
    // res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/availability", async (req, res) => {
  console.log(
    "-------- req.body availability:222   " + JSON.stringify(req.body)
  );
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
      lastAppNo: 0,
    });

    if (availability !== null) {
      console.log(
        "--- create   availability:  " + JSON.stringify(availability)
      );
      console.log("OK done.");
      res.send({ status: "ok", data: "Availability created" });
    }
  } catch (error) {
    res.send({ status: "Error", data: error });
  }
});

app.post("/vetAvailability", async (req, res) => {
  console.log("-------------vetAvailability" + JSON.stringify(req.body));
  const { vet_id } = req.body; // Assuming vet ID is passed as a query parameter
  console.log("vet_id:   " + vet_id);
  try {
    const vetAvailabilities = await Availability.find({ veternarian: vet_id })
      .select(
        "_id availableDate timeFrom timeTo noofPatients lastAppNo doctorCharges serviceCharges"
      )
      .populate({
        path: "veternarian",
        select: "fullname veterinaryClinicName veterinaryClinicAddress",
      });

    // const vetAvailabilities = (await Availability.find({ veternarian: vet_id }).populate('veternarian'));

    if (vetAvailabilities && vetAvailabilities.length > 0) {
      console.log("availabilities: " + JSON.stringify(vetAvailabilities));
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

  console.log(
    "searchAvailability response-----------    " + JSON.stringify(req.body)
  );
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
        .select("_id availableDate")
        .populate({
          path: "veternarian",
          match: { fullname: regexVet, veterinaryClinicName: regexClinic },
          select: "_id fullname",
        })
        .exec();
    } else {
      console.log("----------- response----------------------- 3");
      const filterAvailabilities = await Availability.find()
        .select("_id availableDate")
        .populate({
          path: "veternarian",
          match: { fullname: regexVet, veterinaryClinicName: regexClinic },
        })
        .exec();

      if (filterAvailabilities && filterAvailabilities.length) {
        console.log("----------- response----------------------- 4");
        // console.log("filterAvailabilities length:   " + filterAvailabilities.length);
        // console.log("filterAvailabilities:   " + JSON.stringify(filterAvailabilities));
        dateAvailabilities = filterAvailabilities.filter((a) => a.veternarian);
        console.log(
          "dateAvailabilities length:   " + dateAvailabilities.length
        );
      }
    }
    // console.log("\n --- availabilities:   " + (dateAvailabilities));
    if (dateAvailabilities && dateAvailabilities.length > 0) {
      console.log("----------- response----------------------- 5");
      // const vetIds =
      console.log("\n  -----OK-----" + JSON.stringify(dateAvailabilities));

      const availIDList = JSON.parse(JSON.stringify(dateAvailabilities));
      // const vetIds = availIDList.map(appointment => appointment.veternarian._id);
      const vetIds = [
        ...new Set(
          availIDList.map((appointment) => appointment.veternarian._id)
        ),
      ];

      console.log(vetIds);

      res.send({
        status: "ok",
        msg: "Search success.",
        data: {
          isAvailable: true,
          vetIDs: vetIds,
          date: date !== null ? date : "",
        },
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

function isValidSearchRegExp(search) {
  // Check if search is a string
  if (typeof search !== "string") {
    return false;
  }

  // Check if search is empty
  if (search.trim() === "") {
    return false;
  }

  // Check if search contains only letters, numbers, and spaces
  if (!/^[a-zA-Z0-9\s]+$/.test(search)) {
    return false;
  }

  return true;
}

app.post("/searchClinic", async (req, res) => {
  console.log("-------------REQ BODY" + JSON.stringify(req.body));
  const { searchClinic } = req.body; // Assuming vet ID is passed as a query parameter
  try {
    if (isValidSearchRegExp(searchClinic)) {
      const regexClin = new RegExp(searchClinic, "i");
      // console.log("RegExp: ", regexClin);

      const veternarians = await Veternarian.find({
        mainCity: { $regex: regexClin },
      }).select(
        "_id fullname veterinaryClinicName mainCity veterinaryClinicAddress"
      );
      console.log("veternarians: " + JSON.stringify(veternarians));

      if (veternarians && veternarians.length > 0) {
        res.send(JSON.stringify(veternarians));
      } else {
        console.log("Status:    " + res.status);
        res.send({ status: 404, data: "Date Data not found." });
      }
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});

app.post("/searchPharmacy", async (req, res) => {
  console.log("------searchPharmacy-------REQ BODY" + JSON.stringify(req.body));
  const { searchPharmacy } = req.body; // Assuming vet ID is passed as a query parameter
  try {
    if (isValidSearchRegExp(searchPharmacy)) {
      const regexPhar = new RegExp(searchPharmacy, "i");
      console.log("RegExp: ", regexPhar);

      const pharmacies = await Pharmacy.find({
        mainCity: { $regex: regexPhar },
      }).select("_id fullname pharmacyName mainCity pharmacyAddress");
      console.log("pharmacies: " + JSON.stringify(pharmacies));

      if (pharmacies && pharmacies.length > 0) {
        res.send(JSON.stringify(pharmacies));
      } else {
        console.log("Status:    " + res.status);
        res.send({ status: 404, data: "Date Data not found." });
      }
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

function calculateAppTime(date1, date2, noOfApp) {
  const ONE_MINUTE = 1000 * 60; // Milliseconds in one minute
  // Ensure dates are of Date type
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const differenceInMs = endDate - startDate;
  // Convert difference from milliseconds to minutes
  const noOfMinutesPerPatient = differenceInMs / ONE_MINUTE / noOfApp;

  return Math.round(noOfMinutesPerPatient) + 1; // Return the absolute value to avoid negative results
}

app.post("/createAppointment", async (req, res) => {
  console.log("--------------req.body:   " + JSON.stringify(req.body));
  const { vetAvlID, userID, totalAmount, medications, instructions } = req.body;

  const objAvailability = await Availability.findById(vetAvlID);

  if (objAvailability === null) {
    res.send({ data: "Doctor schedule do not exist. Please try again." });
  } else {
    try {
      console.log(" ---- 2----");
      const appointNo =
        objAvailability.lastAppNo === 0 ? 1 : objAvailability.lastAppNo + 1;
      const appTime = calculateAppTime(
        objAvailability.timeFrom,
        objAvailability.timeTo,
        objAvailability.noofPatients
      );
      console.log("appointNo:  " + appointNo + "  appTime: " + appTime);

      const objAppointment = await Appointments.create({
        appointmentDate: objAvailability.availableDate,
        appointmentTime: appTime,
        appointmentNo: appointNo,
        isPaid: true,
        paidAmount: totalAmount,
        medications: medications,
        instructions: instructions,
        paidDate: new Date(),
        availability: vetAvlID,
        petOwner: userID,
        createdDate: new Date(),
      });
      console.log("objAppointment:  " + JSON.stringify(objAppointment));

      if (objAppointment !== null) {
        console.log("------333-------------");
        const updateData = {
          lastAppNo: appointNo,
          modifiedDate: new Date(),
        };
        console.log("updateData:  " + JSON.stringify(updateData));

        const updatedAvailability = await Availability.findByIdAndUpdate(
          vetAvlID,
          updateData
        );
        console.log(
          "updatedAvailability:  " + JSON.stringify(updatedAvailability)
        );

        if (updatedAvailability !== null) {
          console.log("Appoinment created");
          res.send({ status: "ok", data: JSON.stringify(objAppointment) });
        }
      } else {
        res.send({ status: "failed", data: "Something went wrong." });
      }
    } catch (error) {
      res.send({ status: "Error", data: error });
    }
  }
});

app.get("/appointmentData/:appointmentID", (req, res) => {
  const appointmentID = req.params.appointmentID;
  console.log("appointmentID---------------" + appointmentID);

  Appointments.findById(appointmentID)
    .populate({
      path: "availability",
      // select: "timeFrom doctorCharges serviceCharges",
      populate: {
        path: "veternarian",
        // select: "fullname veterinaryClinicName veterinaryClinicAddress",
      },
    })
    .populate("petOwner")
    .then(async (result) => {
      let sentData = false;
      if (result) {
        const filter = { appointments: appointmentID };
        const prescData = await PrescriptionSendDetails.findOne(filter);
        console.log("\n----prescData----:   " + JSON.stringify(prescData));
        if (prescData) {
          sentData = true;
        }
      }
      // console.log("res---------------:   " + JSON.stringify(result));
      res.send({result: JSON.stringify(result), sentData:sentData});
      // res.status(200).json(users);
    })
    .catch((err) => {
      console.log("Error retrieving users", err);
      res.send({ status: 500, message: "Error retrieving users" });
    });
});

app.get("/availabilityData/:vetAvlID", (req, res) => {
  const vetAvlID = req.params.vetAvlID;
  console.log("vetAvlID---------------" + vetAvlID);

  Availability.findById(vetAvlID)
    .then((result) => {
      console.log(
        "Availability res---------------:   " + JSON.stringify(result)
      );
      res.send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log("Error retrieving users", err);
      res.send({ status: 500, message: "Error retrieving users" });
    });
});

app.post("/appointmentsData", async (req, res) => {
  console.log("\n-------------appointmentsData" + JSON.stringify(req.body));
  const { searchID, userType } = req.body; // Assuming vet ID is passed as a query parameter
  console.log("\n-----searchID:   " + searchID + " -userType " + userType);
  try {
    const query = {
      availability: searchID,
    };
    const query2 = {
      petOwner: searchID,
    };
    console.log(
      "query: " + JSON.stringify(query) + "  query2: " + JSON.stringify(query2)
    );

    let appointments;
    if (userType == 2) {
      appointments = await Appointments.find(query).populate({
        path: "petOwner",
        select: "_id fullname petname age",
      });
    } else {
      appointments = await Appointments.find(query2).populate({
        path: "availability",
        select:
          "_id availableDate timeFrom timeTo noofPatients lastAppNo doctorCharges serviceCharges",
        populate: {
          path: "veternarian",
          select: "fullname veterinaryClinicName veterinaryClinicAddress",
        },
      });
    }

    console.log("\n---------appointments:  " + appointments);
    if (appointments && appointments.length > 0) {
      console.log("\n -----availabilities: " + JSON.stringify(appointments));
      res.send(JSON.stringify(appointments));
    } else {
      console.log("Status:    " + res.status);
      res.status(404).send("Date Data not found.");
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});


app.post("/pharmacyFeedbackData", async (req, res) => {
  console.log("\n-------------appointmentsData" + JSON.stringify(req.body));
  const { petOwnerID, userType } = req.body; // Assuming vet ID is passed as a query parameter
  console.log("\n-----petOwnerID:   " + petOwnerID + " -userType " + userType);
  try {
    const query = {
      petOwner: petOwnerID,
      // pharmacyRepliedDate: { $ne: null } 
    };
    const query2 = {
      petOwner: petOwnerID,
    };
    console.log(
      "query: " + JSON.stringify(query) + "  query2: " + JSON.stringify(query2)
    );

    let appointments;
    let appointments1;
    // if (userType == 1) 
    {
      const appoints = await Appointments.find(query).select('_id');
      const appointmentIds = appoints.map(appointment => appointment._id);

      const query3 = {
        appointment: { $in: appointmentIds },
        pharmacyRepliedDate: { $ne: null }
      };
      const query4 = {
        appointment: { $in: appointmentIds },
      };
      
    console.log("\nquery3: " + JSON.stringify(query3));
    appointments1 = await PrescriptionSendDetails.find(query4);
    // const dd  = appointments1.map(x => x.appointments);

      appointments = await PrescriptionSendDetails.find(query3)
      .select('_id pharmacyRepliedDate drugsAvailability pharmacyComment')
      .populate({
        path: "sendPharmacy",
        select: "_id fullname pharmacyName pharmacyAddress mainCity",
      });
      
    } 
    
    console.log("\n---------appointments:  " + appointments1.length);
    if (appointments && appointments.length > 0) {
      console.log("\n -----availabilities: " + JSON.stringify(appointments));
      res.send(JSON.stringify(appointments));
    } else {
      console.log("Status:    " + res.status);
      res.status(404).send("Date Data not found.");
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});

app.post("/updateMedications", async (req, res) => {
  console.log(
    "\n----updateMedications--req.body:   " + JSON.stringify(req.body)
  );
  const { appointID, medication, information } = req.body;
  try {
    const updateData = {
      medications: medication,
      instructions: information,
      modifiedDate: new Date(),
    };
    console.log(
      "  updateMedications   updateData:  " + JSON.stringify(updateData)
    );

    const updatedAppointment = await Appointments.findByIdAndUpdate(
      appointID,
      updateData,
      { new: true }
    );
    console.log("updatedAppointment:  " + JSON.stringify(updatedAppointment));

    if (updatedAppointment !== null) {
      console.log("Appointment updated");
      res.send({ status: "ok", data: JSON.stringify(updatedAppointment) });
    } else {
      res.send({ status: "Error", data: "No data in updatedAppointment" });
    }
  } catch (error) {
    res.send({ status: "Error", data: error });
  }
});

app.get("/checkPrescriptionSent/:appointID", async (req, res) => {
  try {
    console.log(
      "  ---appointID: " +
        req.params.appointID +
        "  -- req.body --  " +
        JSON.stringify(req.body)
    );
    const filter = { appointID: req.params.appointID };
    const prescData = await PrescriptionSendDetails.findOne(filter);

    if (prescData) {
      res.status(200).send({ message: "Appointment send." });
    } else {
      return res.status(404).send({ message: "Appointment not sent." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/sendPrescription", async (req, res) => {
  console.log(
    "--------------req.body sendPrescription:   " + JSON.stringify(req.body)
  );
  const { appointID, pharmacyID } = req.body;

  try {
    // console.log(" ---- 1----");

    const filter = { appointments: appointID, sendPharmacy: pharmacyID };
    const prescData = await PrescriptionSendDetails.findOne(filter);
    console.log("\n----prescData----:   " + JSON.stringify(prescData));
    if (prescData) {
      res.status(201).send({ message: "Already sent." });
    }
    else{
      const objprescriptSend = await PrescriptionSendDetails.create({
        appointments: appointID,
        sendPharmacy: pharmacyID,
        pharmacyRepliedDate: null,
        drugsAvailability: false,
        pharmacyComment: "",
        isMedicineBought: false,
        createdDate: new Date(),
      });
      console.log("objprescriptSend:  " + JSON.stringify(objprescriptSend));
  
      if (objprescriptSend !== null) {
        let resultsData = [];
        res.status(200).send({ data: JSON.stringify(objprescriptSend) });
      } else {
        res.status(500).send({ message: "Something went wrong." });
      }
    }

  } catch (error) {
    console.log("ERROR---  " + error);
    res.send({ status: "Error", data: error });
  }
});

app.post("/prescriptionData", async (req, res) => {
  console.log(
    "--------------req.body prescriptionData:   " + JSON.stringify(req.body)
  );
  const { userPharmacyID } = req.body;

  PrescriptionSendDetails.find({ sendPharmacy: userPharmacyID })
    .populate({
      path: "appointments",
      populate: [
        {
          path: "availability",
          populate: {
            path: "veternarian",
          },
        },
        {
          path: "petOwner",
        },
      ],
    })
    .then((result) => {
      console.log("\n----------res-----------:   " + JSON.stringify(result));
      res.send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log("Error retrieving prescriptions", err);
      res.send({ status: 500, message: "Error retrieving prescriptions" });
    });
});

app.post("/updatePrescriptionData", async (req, res) => {
  console.log(
    "--------------req.body getPrescriptionData:   " + JSON.stringify(req.body)
  );
  const { userPharmacyID } = req.body;
  try {
    const regexPhar = new RegExp(searchPharmacy, "i");
    console.log("RegExp: ", regexPhar);

    const prescData = await PrescriptionSendDetails.find({
      sendPharmacy: searchPharmacy
    }).populate({
      path: "appointments",
      populate: [
        {
          path: "availability",
          populate: {
            path: "veternarian",
          },
        },
        {
          path: "petOwner",
        },
      ],
    });
    console.log("prescData: 1------------  " + JSON.stringify(prescData));

    if (prescData && prescData.length > 0) {
      console.log("prescData: ------- 2   ");
      res.send(JSON.stringify(prescData));
    } else {
      console.log("Status:    " + res.status);
      res.send({ status: 404, data: "Date Data not found." });
    }
  } catch (error) {
    console.error("Error during database query:", error);
    res.status(500).send({ status: "Error", data: error.message });
  }
});

app.patch("/updatePrescription/:prescID", async (req, res) => {
  console.log(
    "\n----updatePrescription--req.body:   " + JSON.stringify(req.body)
  );
  const prescID = req.params.prescID;
  const { comments, isAvailable } = req.body;
  try {
    const filter = { _id: prescID };
    const updateData = {
      pharmacyComment: comments,
      drugsAvailability: isAvailable,
      pharmacyRepliedDate: new Date(),
      modifiedDate: new Date(),
    };
    console.log("updateMedications   updateData:  " + JSON.stringify(updateData));
    
    const updatedPresc = await PrescriptionSendDetails.findOneAndUpdate(filter, updateData, {
      new: true, // return the updated document
      runValidators: true, // validate before update
    });

    if (!updatedPresc) {
      console.log("  ----3---updatedPresc:error----------- ");
      return res.status(404).send({ message: "Prescription data not found" });
    }

    console.log("updatedPrecription:  " + JSON.stringify(updatedPresc));

    if (updatedPresc !== null) {
      console.log("Prescription Details updated");
      res.status(200).send({ data: JSON.stringify(updatedPresc) });
    } else {
      res.send({ status: "Error", data: "No data in precription" });
    }
  } catch (error) {
    res.send({ status: "Error", data: error });
  }
});

app.listen(port, () => {
  console.log("Mongo DB connection successful run in port: " + port);
});
