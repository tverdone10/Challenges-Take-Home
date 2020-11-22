const router = require("express").Router();
let Challenge = require("../models/challenge.model");

//GET request which gets all challenges

router.route("/").get((req, res) => {
  Challenge.find()
    .then((challenges) => res.json(challenges))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET request which gets a specific challenge by its ID

router.route("/:id").get((req, res) => {
  Challenge.findById(req.params.id)
    .then((challenges) => res.json(challenges))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST request to add a new challenge

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const newChallenge = new Challenge({
    title,
    description,
    startDate,
    endDate,
  });

  newChallenge
    .save()
    .then(() => res.json(`New challenge "${title}" has been added!`))
    .catch((err) => res.status(400).json("Error " + err));
});

//PUT request which allows users to submit to the challenges

router.route("/:id/submit").put((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const userName = req.body.userName;

  Challenge.findOneAndUpdate({
    $push: {
      submissions: [
        {
          title,
          description,
          userName,
        },
      ],
    },
  }).then(() =>
    res.json(`${title} has been submitted! Thanks for submitting, ${userName}!`)
  );
});

module.exports = router;
