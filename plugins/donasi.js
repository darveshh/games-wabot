let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • TELKOMSEL [081252733108]
│ • GOPAY [081252733108]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281252733108
│Tapi tidak punya uang? Follow @nafronanjayy Agar bot tetap Jalan ✓
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
