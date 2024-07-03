/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('sample', {
    description: 'sample',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'sample name please'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'templates/sample/**',
        destination: './sample/{{name}}',
        base: 'templates/sample',
        abortOnFail: true
      }
    ]
  })

  plop.setGenerator('env', {
    description: 'env',
    prompts: [
      {
        type: 'input',
        name: 'backendUrl',
        message: 'backend url please'
      }
    ],
    actions: [
      {
        type: 'add',
        templateFile: 'templates/env/.env.hbs',
        path: '.env',
        force: true
      }
    ]
  })
}
