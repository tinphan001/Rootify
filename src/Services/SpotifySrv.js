  var SpotifyWebApi = require('spotify-web-api-node');

  var spotifyApi = new SpotifyWebApi({
    clientId : '4a18368046b244cfbf4485b71395bcc5',
    clientSecret : '5f3218e0e2824b888bbfb64456e593f8',
    redirectUri : 'http://www.example.com/callback'
  });

  var getArtist = (name) => {

  spotifyApi.setAccessToken('BQC4GXWPTEnmiIG-22B8KT08Oa_kNRB-g6SRV5vXy6v2KBP9j_w9CdecybeaKQUBkR-2wrko4rAh1w4ljau33d-OAGsWX2O1lFmTmRxtN-bcba5Y3PgZXvgLp9E1eU_3YBqVugthtQPivxWt9Q')
  spotifyApi.searchArtists(name, 'artist')
    .then(function(data) {
      console.log('Search artists by ' + name, data.body);
    }, function(err) {
      console.error(err);
    });
}

exports.getArtist = getArtist
