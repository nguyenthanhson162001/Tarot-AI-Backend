import Server from './@bootstrap/server';

const main = async () => {
    const server = await Server.initial();
    await server.start();
};

main()
    .catch((err) => {
        console.error(err);
    })