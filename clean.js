const path = require('path');
const glob = require('glob');
const fs = require('fs');
const dayjs = require('dayjs');
// markdown pattern
const MARKDOWN_PATTERN = '**/*.md';

//Find all md files within a project and ignore node_modules
const files = glob.sync(MARKDOWN_PATTERN, {
	cwd    : path.resolve(__dirname + '/notes/'),
	ignore : 'node_modules/**',
});

console.log(files);

// Read the markdown files one by one and take a picture of the top line inside the file with the console.

const dateRegex = /^(^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$)/gi;
files.forEach((file) => {
	const filePath = path.resolve(__dirname + '/notes/' + file);
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const dateLine = fileContent.split('\n')[3];
	const date = dateLine.split('date: ')[1].replaceAll('"', '');
  const now = dayjs().format('YYYY-MM-DD').valueOf();
	// console.log(dateRegex.exec(dateLine));
	console.log('dateLine.replaceAll', dayjs(date).valueOf());
  console.log('now', now)
});

// String Console for Date Regular Expression
// const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/ig;
// console.log(dateRegex.test('2019-01-01'));
// console.log(dateRegex.test('2019-01-01'));

//Extract only characters that fit the regular expression);
