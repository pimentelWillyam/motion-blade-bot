// importing dotenv and environment variables
import * as dotenv from 'dotenv-safe'

dotenv.config()

// importing discord library
import {Client, IntentsBitField} from 'discord.js'

// importing discord client
import DiscordClient from './helper/DiscordClient';

//instanciating discord.js client
const client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages,IntentsBitField.Flags.MessageContent]})

//instanciating discord manipulation class
const discordClient = new DiscordClient(client)

discordClient.start()
discordClient.listen()






