export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6153d3d8d2b5f660e5ae7649',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-3wxh984x',
                  apiId: '1074377c-d7f2-482a-8a3e-107ae883796d'
                },
                {
                  buildHookId: '6153d3d8b1ab9f5e05772b7b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-nywxpa2x',
                  apiId: 'd1cefefb-2210-401f-8799-cc209f574b18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/infernalsirius/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-nywxpa2x.netlify.app', category: 'apps'}
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
