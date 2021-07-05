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
                    "60e38cac0456b5b987cdfdde",
                  title: "Sanity Studio",
                  name: "personal-gatsby-blog-studio",
                  apiId: "5b0afa5e-f9bd-43c2-8dda-4c47f7947d65",
                },
                {
                  buildHookId: "60e38cac650c2e94d56e047c",
                  title: "Blog Website",
                  name: "personal-gatsby-blog-web",
                  apiId: "a68f666e-1be3-433b-84ff-819a33f1e0d7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ricardober93/Personal-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://personal-gatsby-blog-web.netlify.app",
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
