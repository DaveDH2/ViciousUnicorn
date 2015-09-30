

var fakeDocs = require('./grabStory');
var scraper = require('html-to-json');


var StoryScraper = (function() {
  var promise = fakeDocs.getDocFromGoogleDrive().then(function(html){
    return scraper.batch(html, {
      volume: scraper.createParser(['h1', {
        'volumeName': function($volume){
          return $volume.text();
        }
      }])
    });
  });

// var promise = scraper.parse('<div>content</div>', {
//   'text': function ($doc) {
//     return $doc.find('div').text();
//   }
// });

  promise.done(function(result){
    console.log(result);
  });
}());

module.exports = StoryScraper;
