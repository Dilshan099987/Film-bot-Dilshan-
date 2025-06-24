const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `👋𝐇𝐄𝐋𝐋𝐎 *${pushname}*
╭━━〔 𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃 𝐕1 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: Dilshan Ashinsa 
┃◈┃• *🧬 Version*: 3.0.0 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷

> ©𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐃𝐈𝐋𝐒𝐇𝐀𝐍 〽️𝗗`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/juroe8.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419308807922@newsletter',
                    newsletterName: '𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃 𝐕1',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
