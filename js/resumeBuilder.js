var bio = {
"name" : "Mike Ribera",
"role" : "Web Developer",
"contacts" : {
  "mobile" : "993435991",
  "email" : "mikeribera@gmail.com",
  "github" : "johndoe",
  "twitter" : "@johndoe",
  "location" : "Rio de Janeiro"
},
"welcomeMessage" : "Helo world",
"skills" : [
  "Just awesome", "HTML", "CSS"
],
"bioPic" : "https://pbs.twimg.com/profile_images/616621547114102784/-MOLs0J9.jpg"
};

var work = {
  "position" : "Web developer ninja",
  "employer" : "6D",
  "years" : "3 years",
  "city" : "Rio de Janeiro"
};

var education = {
  "name" : "CEFET",
  "years" : "3",
  "city" : "Rio de Janeiro"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "Contacts");
$("#header").append(formattedContactGeneric);

var formattedContactGenericData = HTMLcontactGeneric.replace("%data%", "here");
$("#header").append(formattedContactGenericData);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#header").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#header").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#header").append(formattedLocation);

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work["position"]);
$("#header").append(formattedWorkPosition);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
$("#header").append(formattedSchoolName);
