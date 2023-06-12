const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number):'
        }
    ]);
}

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeElement;

    if (shape === 'circle') {
        shapeElement = `<circle cx="50%" cy="50%" r="50%" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        shapeElement = `
            <polygon points="50%,0 100%,100% 0,100%" fill="${shapeColor}" />
        `;
    } else if (shape === 'square') {
        shapeElement = `
            <rect width="100%" height="100%" fill="${shapeColor}" />
        `;
    } else {
        throw new Error('Invalid shape');
    }
    const svgMarkup = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeElement}
            <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
        </svg>
    `;

    const filePath = path.join('examples', 'logo.svg');
    fs.writeFileSync(filePath, svgMarkup);
    console.log(`Generated ${filePath}`);
}

function init() {
    promptUser().then(answers => {
        generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    });
}

init();
