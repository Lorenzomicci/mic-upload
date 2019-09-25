db.createUser(
  {
    user: "admin",
    pwd: "pRjJFPKx45w6JQyk",
    roles: [
        { role: "dbOwner", db: "files" },
    ]
  }
)
