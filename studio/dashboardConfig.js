export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e71264da73ca227f679255',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zwqgdyur',
                  apiId: 'beb2cc3b-60ec-4002-8b4a-09d72b635f09'
                },
                {
                  buildHookId: '60e71264da73ca28f2678d9f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x55peyzb',
                  apiId: '53f7dbf6-d488-443f-806e-0345e207c106'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielde666/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x55peyzb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
