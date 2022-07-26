export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62df957dd237c047a820f510",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-64r7y22m",
                  apiId: "f7260609-5870-4fa0-bcf7-59abebf43f1c",
                },
                {
                  buildHookId: "62df957dda36f24874563720",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xoxifjke",
                  apiId: "80013a8c-c598-489d-bbef-9468228016c5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aphrodite999/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xoxifjke.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
