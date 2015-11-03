var config = require('./config.js');

require('./libs/');

// document ready
function run() {
  config.init();
  console.log('runs');
}

// in case the document is already rendered
if (document.readyState!='loading'){
  run();
}
// modern browsers
else if (document.addEventListener){
  document.addEventListener('DOMContentLoaded', run);
}
// IE <= 8
else {
  document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete'){
      run();
    }
  });
}
