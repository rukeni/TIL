const path = require('path');
const glob = require('glob');
const fs = require('fs');

const dayjs = require('dayjs');
// markdown pattern
const MARKDOWN_PATTERN = '*.md';

//Find all md files within a project and ignore node_modules
const files = glob.sync(MARKDOWN_PATTERN, {
	cwd    : path.resolve(__dirname),
	ignore : 'node_modules/**',
});

console.log(files);

const dateRegex = /^(^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$)/gi;
files.forEach((file) => {
	console.log('file', file.replace('.md', ''));
	const fileName = file.replace('.md', '');
	if (dateRegex.test(fileName)) {
    // file move to notes/daily-notes
    fs.renameSync(path.resolve(__dirname + '/' + file), path.resolve(__dirname + '/notes/daily-notes/' + file));
	}
});