  var SpotifyWebApi = require('spotify-web-api-node');

  var spotifyApi = new SpotifyWebApi({
    clientId : '4a18368046b244cfbf4485b71395bcc5',
    clientSecret : '5f3218e0e2824b888bbfb64456e593f8',
    redirectUri : 'http://www.example.com/callback'
  });

  var getArtist = (name) => {

  spotifyApi.setAccessToken('BQAkj0ho2yc3OIpqSfdmRAszn_1H4BcSjTpvp8K4_RAuPODTQP7rjSU8moyRWjk0hAfqJuXTZoLTyaDae9nNptc_HfyqTFVioUQlBe04KI0d1ov4r8T2MfOq62nBefM8tQJoCEeEGW98zn4_cQ')
  spotifyApi.searchArtists(name, 'artist')
    .then(function(data) {
      console.log('Search artists by ' + name, data.body);
    }, function(err) {
      console.error(err);
    });
}

exports.getArtist = getArtist
