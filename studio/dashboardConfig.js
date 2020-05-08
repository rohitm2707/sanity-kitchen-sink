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
                  buildHookId: '5eb54dbf3eca3b87a6dd340d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j4s647hh',
                  apiId: 'eb2e2e88-42d0-4b59-b65c-5865243d3fe0'
                },
                {
                  buildHookId: '5eb54dbf1dedb312ca9adbd0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g5xo6okk',
                  apiId: 'cfed78d0-479c-44ea-89f0-6ea4fc28e456'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rohitm2707/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g5xo6okk.netlify.app', category: 'apps'}
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
