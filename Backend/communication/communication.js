exports.bind = (io, users, sockets) => {
    var data = {};
    var request = io.of('/').on('connection', client => {
        console.log(client, 4)
        client.on("CLIENT_REQUEST", req => {
            data = JSON.parse(req);
            console.log(data, req, 18);
        });
    });
};