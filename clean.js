const path = require('path');
const glob = require('glob');

// markdown pattern
const MARKDOWN_PATTERN = '**/*.md';

//Find all md files within a project and ignore node_modules
const files = glob.sync(MARKDOWN_PATTERN, {
  cwd: path.resolve(__dirname, '../'),
  ignore: 'node_modules/**'
});

console.log(files);