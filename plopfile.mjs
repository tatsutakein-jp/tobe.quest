/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('sample', {
    description: 'sample',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'sample name please'
    }],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'templates/sample/**',
        destination: './sample/{{name}}',
        base: 'templates/sample',
        abortOnFail: true,
      },
    ]
  });
};
