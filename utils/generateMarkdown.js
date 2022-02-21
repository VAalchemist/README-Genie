const fs = require('fs');
const markdownDataArgs = process.argv.slice(2);
const [data] = markdownDataArgs;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink(license, err => {
    if (err) throw new Error(err);

    console.log('Markdown is ready! Feast your eyes on your new README.md!');
 });

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
fs.writeFile('README.md', generateMarkdown(data)=> {
  return `# ${data.title}

`;
});

module.exports = generateMarkdown;
