export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d7a791c4fd55b7cd4620594',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6fnfqyta',
                  apiId: '8bffa567-6e8e-44cb-b3f9-2577db8bdf67'
                },
                {
                  buildHookId: '5d7a791efd36d1cfe6682195',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-m7y1p6uh',
                  apiId: '9f632114-9f3a-4535-8e9d-e74192cbb49f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shishak/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-m7y1p6uh.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
