const allFunctions = require("./functions/player_display_functions")
const basicFunctions = require("../commands/functions/basic_functions")

module.exports = {
    name: "stats",
    description: "View a players stats!",
    async execute(message, args, client) { 
        const message_to_send = await allFunctions.main(message.content)
        if (message_to_send == "Invalid stats or smth try again!" || message_to_send == "Invalid Username please check the spelling and try again!") {
            await message.reply(message_to_send)
            return
        } else {
            await message.reply(basicFunctions.spoilers() + message_to_send)
        }
    }
}