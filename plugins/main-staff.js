let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `EQUIPO DE AYUDANTES DEL BOT
    🌸 *Bot:* ${botname}
    🌸 *Versión:* ${vs}
    🌸 *Libreria:* ${libreria + baileys}
    
    👑 *Pɾσριҽƚαɾισ:*
    
    • 
    ☁ *Rol:* Emma
    ☁ *Número:* ${creador}
    ☁ *GitHub:* https://github.com/cris396/A-bot
    
    🍄  *Colaboradores:*
    
    • cRIS
    ☁ *Rol:* Colaborador
    ☁ *Número:* Wa.me/51957436939
    ☁ *GitHub:* https://github.com/cris396/A-bot`
    await conn.sendFile(m.chat, icons, 'nino.jpg', staff.trim(), fkontak, true, {
    contextInfo: {
    'forwardingScore': 200,
    'isForwarded': false,
    externalAdReply: {
    showAdAttribution: true,
    renderLargerThumbnail: false,
    title: `👑 Developers 👑`,
    body: `🌙 STAFF DEL BOT`,
    mediaType: 1,
    sourceUrl: redes,
    thumbnailUrl: icono
    }}
    }, { mentions: m.sender })
    await m.react(emoji)
    
    }
    handler.help = ['staff']
    handler.command = ['colaboradores', 'staff']
    handler.register = true
    handler.tags = ['main']
    
    export default handler
