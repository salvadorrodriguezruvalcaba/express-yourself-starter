
const path = require('path');

// dependencies from npm
const express = require('express');
const ejs = require('ejs');
const ghAvatar = require('gh-avatar');

// Initialize our app
const app = express();
var avatarURL = 'https://avatars3.githubusercontent.com/u/19158679?v=3&u=ba90fc44d0afd2fd7a8ffe3a61893473aaec2590&s=140';

// Set our views directory
app.use(express.static('css'));
app.use(express.static('img'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  res.render('index.ejs', { nameDeveloper: 'Salvador Rodriguez Ruvalcaba',
                            myAvatar: avatarURL,
                            photo: 'salvador_photo.jpg',
                            description: 'Extensive education and over 20 years experience developing large client-server app with PB and SQL Server, and recently on HTML, CSS, Bootstrap and Java. ',
                            honors: ['Member of the National Adult Education Honor Society (NAEHS).', 'Third place in the National Painting Contest.', 'Volunteer in Manos de Cristo.'],
                            skills: ['PowerBuilder Developer, OOA/OOD, PFC', 'SQL Server, Sybase, Apache, My SQL, Civic CRM', 'HTML5, CSS3 and JavaScript and Bootstrap 3', 'Java EE (NetBeans IDE 8.01), C++, C#.', 'Javascript', 'CSS'],
                            hobbies: ['Paint', 'Sculptor', 'Chess', 'Run', 'Bonsai Tree', 'Botany']
                          });

});

//
// app.get('/', function(req, res, next) {
//   res.render('index.ejs', { hobbies: ['Paint', 'Chess', 'Run', 'Bonsai Jarden'] });
// });



// Set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
