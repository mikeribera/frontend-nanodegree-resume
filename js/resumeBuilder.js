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
"bioPic" : "https://pbs.twimg.com/profile_images/616621547114102784/-MOLs0J9.jpg",
"skills" : "Just awesome"
};

var formattedName = HTMLheaderName.replace("%data%", "Mike Ribera");
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contactInfo);
$("#header").append(formattedContactGeneric);


//  HTMLwelcomeMsg
//  HTMLskillsStart
