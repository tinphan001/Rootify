

  var SpotifyWebApi = require('spotify-web-api-node');

  var spotifyApi = new SpotifyWebApi({
    clientId : '4a18368046b244cfbf4485b71395bcc5',
    clientSecret : '5f3218e0e2824b888bbfb64456e593f8',
    redirectUri : 'http://www.example.com/callback'
  });

  var getArtist = () => {

  spotifyApi.setAccessToken('BQDnJsWdDsdUVBMa_hZi1sGmw3IY4OhOjibcmfgjSfI1BGyvWHlOqri1kRjOijFC_Vseb_y-umCy-nL2I9GvM6_j-R_E996qwcd-VhZKjT81gZHVI90Uo64czkAZDaTUl13ipw3iBuprhJnJFw')
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    .then(function(data) {
      console.log('Artist albums', data);
      console.log('Artist albums', data.body);
    }, function(err) {
      console.error(err);
    });
}

exports.getArtist = getArtist
