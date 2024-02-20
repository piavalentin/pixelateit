const { savings } = require('../data/savings');

const lowestColor = "#FFFBBC";
const highestColor = "#FF7733";

const pixelsPerYear = (year) => {
  const savingsFilteredForYear = Object.entries(savings)
    .filter(([key, value]) => key.includes(year));

  const totalSavingsForYear = savingsFilteredForYear
    .reduce((acc, [key, value]) => acc + value, 0);

  const savingsForYear = savingsFilteredForYear
    .map(([key, value]) => value);

  const getHighestSavingForYear = Math.max(...savingsForYear);
  const getLowestSavingForYear = Math.min(...savingsForYear);
  const interpolateColor = (fraction) => {
    const color1 = parseInt(lowestColor.slice(1), 16);
    const color2 = parseInt(highestColor.slice(1), 16);

    const r = Math.floor((color2 >> 16) * fraction + (color1 >> 16) * (1 - fraction));
    const g = Math.floor(((color2 >> 8) & 0xff) * fraction + ((color1 >> 8) & 0xff) * (1 - fraction));
    const b = Math.floor((color2 & 0xff) * fraction + (color1 & 0xff) * (1 - fraction));

    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  }

  const savingsWithColors = Object.fromEntries(
    savingsFilteredForYear
      .map(([date, value]) => {
        const fraction = (value - getLowestSavingForYear) / (getHighestSavingForYear - getLowestSavingForYear);
        const color = interpolateColor(fraction);
        return [date, { value, color }];
      })
  );

  return {
    totalSavingsForYear,
    getHighestSavingForYear,
    getLowestSavingForYear,
    savingsWithColors
  };
}

exports.pixelsPerYear = pixelsPerYear;
