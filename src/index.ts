// importing dotenv and environment variables
import * as dotenv from 'dotenv-safe'

dotenv.config()

// importing the random number generator
import RandomNumberGenerator from './helper/randomNumberGenerator';

//importing command manager
import CommandManager from './helper/CommandManager'
// importing message handler
import MessageHandler from './handler/MessageHandler'

// importing discord library
import {Client, IntentsBitField} from 'discord.js'

// importing discord client
import DiscordClient from './helper/DiscordClient'

//instanciating discord.js client
const client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages,IntentsBitField.Flags.MessageContent]})

// instanciating the random number generator
const randomNumberGenerator = new RandomNumberGenerator()

// instanciating the command manager
const commandManager = new CommandManager(randomNumberGenerator)
// instanciating message handler
const messageHandler = new MessageHandler(commandManager)

//instanciating discord manipulation class
const discordClient = new DiscordClient(client, messageHandler)

discordClient.start()
discordClient.listen()
client.login(process.env.token)







