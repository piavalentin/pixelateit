const { launchServer } = require('./utils/server');
const { pixelsPerYear } = require('./utils/tools');
const { generateOutput } = require('./utils/output');

const year = 2024;

console.log(`>>> hello I am pixelateit and this is my to do list:\n
    [x] create color set
    [x] create dummy data set
    [ ] sort pixels per date
    [ ] double think about format of savings{}
    [ ] PLUS use express?
    [ ] PLUS feature separate per month
    [ ] change savings naming to neutral name
    [x] map data to color\n\n`);

const yearSavings = pixelsPerYear(year);
const pixels = yearSavings.savingsWithColors;
const output = generateOutput(pixels);

launchServer(`<h1>my saving mood board for ${year}</h1><div style="max-width: 500px;">${output}</div>`);
