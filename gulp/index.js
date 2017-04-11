var fs = require('fs');
// export the list of task files in the gulp directory
var tasks = fs.readdirSync('./gulp/tasks');
tasks.forEach(function(task) {
  exports.task = require('./tasks/' + task);
});
