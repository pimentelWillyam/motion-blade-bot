// importing dotenv and environment variables
import * as dotenv from 'dotenv-safe'

dotenv.config()

// importing discord library
import {Client} from 'discord.js'

// importing discord client
import DiscordClient from './helper/DiscordClient';

//instanciating discord.js client
const client = new Client({intents: []});

//instanciating discord manipulation class
const discordClient = new DiscordClient(client)

discordClient.start()






