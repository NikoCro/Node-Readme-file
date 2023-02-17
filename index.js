const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = ({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  email,
  github,
}) =>
  `
# PROJECT TITLE 
  
${title}

# DESCRIPTION 

${description}

# INSTALATION 

${installation}

# USAGE 

${usage}

# LICENSE 

${license}

# CONTRIBUTION 

${contribution}

# TESTS 

${tests}

# QUESTIONS 

${email}

# GITHUB 

${github}

  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies",
    },
    {
      type: "input",
      name: "usage",
      message: "what do you need to know about using the repo?",
    },
    {
      type: "list",
      name: "license",
      choices: ["mit", "gpl", "apache", "none"],
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What does the user need to know abut contributing to the repo?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github page?",
    },
  ])
  .then((answers) => {
    const readmeContents = generateReadme(answers);

    fs.writeFile("README.md", readmeContents, (err) =>
      err ? console.log(err) : console.log("Successfully created Readme.md!")
    );
  });
