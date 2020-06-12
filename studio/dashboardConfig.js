export default {
  widgets: [
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
                  buildHookId: '5ee3a1d800c1feb59005a2e9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dbo51jsq',
                  apiId: 'c2368d08-0d36-440c-a7e6-6acca0b412d9'
                },
                {
                  buildHookId: '5ee3a1d87e0d3bd2899f1d7b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uqtoxb3f',
                  apiId: 'e2279c84-6419-4eb7-aff1-5db346e7b7f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soilofbuddha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uqtoxb3f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
