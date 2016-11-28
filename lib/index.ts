import RingCentralClient from "ringcentral-client";
import Config from "./Config";

let config: Config = require("../app-data/config.json");
let client = new RingCentralClient(config.app);
client.login(config.user).then(() => {
    let presenceSubscription = client.createSubscription();
    console.log("[");
    presenceSubscription.on(presenceSubscription.events.notification, handleNotification);
    return presenceSubscription.setEventFilters(["/account/~/presence?detailedTelephonyState=true"]).register();
}).catch(e => {
    console.log("Error", e);
});

function handleNotification(msg) {
    msg.arriveTime = Date.now();
    console.log(JSON.stringify(msg) + ",");
}

process.on("exit", function () {
    console.log("]");
});

process.on('SIGINT', () => {
    process.exit(0);
});