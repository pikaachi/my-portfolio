export default {
    routes: [
      {
        method: "GET",
        path: "/projects", // Change from /experiences to /project
        handler: "project.find",
        config: { auth: false },
      },
      {
        method: "GET",
        path: "/projects/:id", // Singular path for fetching one project
        handler: "project.findOne",
        config: { auth: false },
      },
    ],
  };
  