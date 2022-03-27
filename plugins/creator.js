let handler = function (m) {
  this.sendContact(m.chat, '6285161738336', '𝗗𝗮𝗿𝘃𝗲𝘀𝗵', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
