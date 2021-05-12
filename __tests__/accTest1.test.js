const axe = require('axe-core');
const regeneratorRuntime = require('regenerator-runtime');
const path = require('path');
const fs = require('fs');

const html = fs.readFileSync(path.resolve(__dirname,
  '../index.html'), 'utf8');

describe('Component is accessible according to wcag21aa standards.', () => {
  const print = (violations) => {
    if (violations.length === 0) {
      console.log('Congrats! Keep up the good work, you have 0 known violations!');
    } else {
      violations.forEach(axeViolation => {
        const whereItFailed = axeViolation.nodes.map(node => node.html);
        // uncomment the line(s) below to see suggestions on how to fix accessibility issues
        // const failureSummary = axeViolation.nodes.map(node => node.failureSummary);

        const {
          description,
          help,
          helpUrl
        } = axeViolation;

        console.log('---------',
          '\nTEST DESCRIPTION: ', description,
          '\nISSUE: ', help,
          '\nMORE INFO: ', helpUrl,
          '\nWHERE IT FAILED: ', whereItFailed,
          // '\nHOW TO FIX: ', failureSummary
        );
      });
    }
  }

  let options;

  beforeAll((done) => {
    // exclude tests that are incompatible
    options = {
      rules: {
        'color-contrast': {
          enabled: false
        },
        'link-in-text-block': {
          enabled: false
        },
      },
      runOnly: {
        type: 'tag',
        value: ['wcag21aa']
      }
    };

    // get language tag from imported html file and assign to jsdom document
    const langTag = html.match(/<html lang="(.*)"/);
    if (langTag) document.documentElement.lang = langTag[1];
    document.documentElement.innerHTML = html.toString();

    done();
  });

  it('Component is accessible regarding language.', (done) => {
    options.runOnly.value.push('cat.language')
    axe.run(options, async (err, results) => {
      if (err) {
        console.log('err: ', err);
        done();
      }

      print(results.violations);

      expect(err).toBe(null);
      expect(results.violations).toHaveLength(0);
      done();
    });
  })
});