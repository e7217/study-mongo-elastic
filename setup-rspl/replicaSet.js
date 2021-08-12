config = {
  _id : "rs0",
  members: [
    {_id: 0, host: "mongo:27017"},
    {_id: 1, host: "mongo-second:27017", priority: 0, votes: 0},
  ]
}

rs.initiate(config);

rs.conf();
