const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu list",
    category: "main",
    react: "📜",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: menuinfo.MENU_IMG},caption: menuinfo.MENU_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})