import type IMessageHandler from "../interface/IMessageHandler";

import IDiscordClient from "../interface/IDiscordClient";


import {type Client, Events, type Message} from "discord.js";




class DiscordClient implements IDiscordClient {
    constructor(private readonly client: Client, private readonly messageHandler: IMessageHandler) {}

    start() {
        console.log('Logging in...')
        this.client.login(process.env.token)
        this.client.on('ready', (c) => {
            console.log(`✅ ${c.user.tag} is online.`)
          })
    }

    listenToMessages() {
        console.log('Listening to messages...')
        this.client.on(Events.MessageCreate, (message: Message) => {
            try {
            this.messageHandler.handle(message)
                
            } catch (error) {
                message.reply('Durante a execução deste comando houve um erro')
            }
        })
    }
}

export default DiscordClient