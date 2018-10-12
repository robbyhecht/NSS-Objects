const sanger = {
  district: "Fifth",
  platform:
    {
      taxes: "flatTax",
      jobs: "lots",
      infrastructure: "stronger",
      healthCare: "universal",
      crimeEnforcement: "strengthen"
    },
  donationUrl: "http://www.sanger.com",
  calendar: {
    May1: "speech",
    May5: "banquet",
    May21: "election party"
  },
  volunteerInfo: [
    {
    name: "",
    address: "",
    email: "",
    phone: "",
    availability: "",
    willingToDo: []
    }],
  bio: "see page2",
  images: {
    headShot: "see page3",
    famPic: "see page4",
    constituentPic: "see page5"
  },
  missionStatement: "see page6",
  voterUrl: "http://website.com"
}

function addToImageGallery(newImage, image) {
  sanger.images[newImage] = image;
}

function changeBiography(newBio) {
  sanger.bio = newBio;
}

function changePlatform(topic, newPlatformStatement) {
  sanger.platform[topic] = newPlatformStatement;
}

function addVolunteer(name1, address1, email1, phone1, availability1, willingToDo1) {
  sanger.volunteerInfo.push( {
    name: name1,
    address: address1,
    email: email1,
    phone: phone1,
    availability: availability1,
    willingToDo: willingToDo1 }
  )
}



// function changePlatform (topic, newPlatformStatement) {
//   ...
// }

// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

// Am I modifying an array? Then the function argument should be added to the target array with the push() method.
// Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.