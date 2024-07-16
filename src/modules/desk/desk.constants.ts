export const deskPaths = {
  prefix: "/desks",
  listDesk: {
    path: "",
    operation: {
      summary: "Get All Desks",
      description: "Get All Desks in the system",
    }
  },
  createDesk: {
    path: "",
    operation: {
      summary: "Create a Desk",
      description: "Create a new Desk in the system",
    }
  },
  updateDesk: {
    path: "/{id}",
    operation: {
      summary: "Update a Desk",
      description: "Update an existing Desk in the system",
    }
  },
  deleteDesk: {
    path: "/{id}",
    operation: {
      summary: "Delete a Desk",
      description: "Delete an existing Desk from the system",
    }
  },
  getDesk: {
    path: "/{id}",
    operation: {
      summary: "Get a Desk",
      description: "Get a single Desk by its ID",
    }
  },
}