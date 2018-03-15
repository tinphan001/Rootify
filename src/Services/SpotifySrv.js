  var SpotifyWebApi = require('spotify-web-api-node');

  var spotifyApi = new SpotifyWebApi({
    clientId : '4a18368046b244cfbf4485b71395bcc5',
    clientSecret : '5f3218e0e2824b888bbfb64456e593f8',
    redirectUri : 'http://www.example.com/callback'
  });

  var getArtist = (name) => {

  spotifyApi.setAccessToken('BQBIytH8Q4-xPzLqK6rkSZsS1Zv9CgjROABBy9Din9cNIkpwFVO34kT1cpRcuXBiA2kEQSXhYaQ6ymbSI_q4VmfWsxrORF8eHKxzxxW9yRNgD_x31zBLr7uP8a8WfiIxgd1uYXcoYTVSsYS26w')
  spotifyApi.searchArtists(name, 'artist')
    .then(function(data) {
      console.log('Search artists by ' + name, data.body);
    }, function(err) {
      console.error(err);
    });
}

exports.getArtist = getArtist
