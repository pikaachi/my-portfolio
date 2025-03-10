export default {
    routes: [
      {
        method: "GET",
        path: "/experience", // Change from /experiences to /experience
        handler: "experience.find",
        config: { auth: false },
      },
      {
        method: "GET",
        path: "/experience/:id", // Singular path for fetching one experience
        handler: "experience.findOne",
        config: { auth: false },
      },
    ],
  };
  