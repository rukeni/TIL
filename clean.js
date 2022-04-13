const path = require('path');
const glob = require('glob');

// markdown pattern
const MARKDOWN_PATTERN = '**/*.md';

//Find all md files within a project
const getMarkdownFiles = () => {
  return new Promise((resolve, reject) => {
   glob(MARKDOWN_PATTERN, (error, files) => {
    if (error) {
     reject(error);
     return;
    }
 
    resolve(files.map(filePath => path.join(process.cwd(), filePath)));
   });
  });
}

getMarkdownFiles().then(files => {
  console.log('files', files)
})