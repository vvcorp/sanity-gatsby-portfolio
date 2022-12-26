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
                  buildHookId: '63aa1fd7988314798d0aed29',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uux372iz',
                  apiId: '154396f3-fc9b-4752-8dbf-faf4f88df992'
                },
                {
                  buildHookId: '63aa1fd7ef27716ac69a06a7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yh1onsne',
                  apiId: '4deefd7b-5380-4d29-92be-ebe7bb0094ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vvcorp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yh1onsne.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
