const { generateLogo } = require('./shapes.js');
const fs = require('fs');

describe('Shape generation', () => {
  test('generateLogo function generates valid SVG markup for a circle shape', async () => {
    const text = 'Example';
    const textColor = '#000000';
    const shape = 'circle';
    const shapeColor = '#FF0000';

    const expectedSvgMarkup = `
      <svg width="300" height="200">
        <circle cx="50%" cy="50%" r="50%" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `;

    await generateLogo(text, textColor, shape, shapeColor);

    const svgMarkup = fs.readFileSync('examples/logo.svg', 'utf8');

    expect(svgMarkup).toEqual(expectedSvgMarkup);
  });

  test('generateLogo function generates valid SVG markup for a triangle shape', async () => {
    const text = 'Example';
    const textColor = '#000000';
    const shape = 'triangle';
    const shapeColor = '#00FF00';

    const expectedSvgMarkup = `
      <svg width="300" height="200">
        <polygon points="0,0 100,100 0,100" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `;

    await generateLogo(text, textColor, shape, shapeColor);

    const svgMarkup = fs.readFileSync('examples/logo.svg', 'utf8');

    expect(svgMarkup).toEqual(expectedSvgMarkup);
  });

  test('generateLogo function generates valid SVG markup for a square shape', async () => {
    const text = 'Example';
    const textColor = '#000000';
    const shape = 'square';
    const shapeColor = '#0000FF';

    const expectedSvgMarkup = `
      <svg width="300" height="200">
        <rect width="100" height="100" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `;

    await generateLogo(text, textColor, shape, shapeColor);

    const svgMarkup = fs.readFileSync('examples/logo.svg', 'utf8');

    expect(svgMarkup).toEqual(expectedSvgMarkup);
  });
});