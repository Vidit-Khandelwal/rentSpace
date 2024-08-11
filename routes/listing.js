const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const {isLoggedIn , isOwner , validateListing} = require("../middleware.js");
const listingController =   require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//Index Route and Create Route
router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing, listingController.createListing);


//New Route
router.get("/new" , isLoggedIn , listingController.renderNewForm);

//Show Route, Update Route, Delete Route
router.route("/:id")
.get(listingController.showListing)
.put(isLoggedIn , isOwner, upload.single('listing[image]'), validateListing , listingController.updateListing)
.delete(isLoggedIn , isOwner , listingController.destroyListing);

//Edit Route
router.get("/:id/edit" , isLoggedIn, isOwner , listingController.renderEditForm);



module.exports = router;