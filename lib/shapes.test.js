// Import the necessary functions from your logoGenerator.js file
const { generateCircle, generateTriangle, generateSquare } = require('/shapes.js');

describe('Shape generation', () => {
  test('generateCircle function returns valid SVG markup for a circle shape', () => {
    // Define the expected SVG markup for a circle shape
    const expectedMarkup = '<svg>...</svg>';

    // Call the generateCircle function and capture the result
    const svgMarkup = generateCircle();

    // Assert that the generated SVG markup matches the expected markup
    expect(svgMarkup).toBe(expectedMarkup);
  });

  test('generateTriangle function returns valid SVG markup for a triangle shape', () => {
    // Define the expected SVG markup for a triangle shape
    const expectedMarkup = '<svg>...</svg>';

    // Call the generateTriangle function and capture the result
    const svgMarkup = generateTriangle();

    // Assert that the generated SVG markup matches the expected markup
    expect(svgMarkup).toBe(expectedMarkup);
  });

  test('generateSquare function returns valid SVG markup for a square shape', () => {
    // Define the expected SVG markup for a square shape
    const expectedMarkup = '<svg>...</svg>';

    // Call the generateSquare function and capture the result
    const svgMarkup = generateSquare();

    // Assert that the generated SVG markup matches the expected markup
    expect(svgMarkup).toBe(expectedMarkup);
  });
});