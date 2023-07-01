
import IDiscordClient from "../interface/IDiscordClient";


import {type Client, type Message } from "discord.js";




class DiscordClient implements IDiscordClient {
    constructor(private readonly client: Client) {}

    start() {
        console.log('Logging in...');
        this.client.login(process.env.token)
        this.client.once('ready', readyClient => console.log('Sucessfully logged as ' + readyClient.user.tag));
        this.client.on('messageCreate', (message: Message) => console.log('Message:' + message))
    }
}

export default DiscordClient