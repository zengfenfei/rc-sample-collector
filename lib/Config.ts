/**
 * The Config file format for the app
 */
interface Config {
    app: {
        server: string;
        appKey: string;
        appSecret: string;
    };

    user: {
        username: string;
        extension: string;
        password: string;
    };

}

export default Config;