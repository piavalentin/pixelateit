/**
 * @param pixels
 * pixels {
 *   '2024-01-01T00:00:00.000000Z': { value: 760, color: '#ffbf33' },
 *   '2024-01-02T00:00:00.000000Z': { value: 648, color: '#ffc633' },
 *   '2024-01-03T00:00:00.000000Z': { value: 112, color: '#ffe633' },
 *   '2024-01-04T00:00:00.000000Z': { value: 168, color: '#ffe333' },
 * }
 */

const pixelSize = 20;
const generateOutput = (pixels) => {
  // TODO: sort pixels in order by date
  let output = `<div style="display: grid; grid-gap: 2px; grid-template-columns: repeat(auto-fill, ${pixelSize}px);">`;

  Object.entries(pixels).forEach(([date, pixel]) => {
    // TODO optional: include value
    const { color } = pixel;

    output += `<div style="width: ${pixelSize}px; height: ${pixelSize}px; background: ${color};"></div>`
  });

  output += '<div>';
  return output;
}

exports.generateOutput = generateOutput;
