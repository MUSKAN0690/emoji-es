const emojiGallery = document.getElementById("emoji-gallery");
const emojis = [
    "\u{1F600}", "\u{1F603}", "\u{1F604}", "\u{1F60A}", "\u{1F60D}", "\u{1F618}",
    "\u{1F61C}", "\u{1F61E}", "\u{1F633}", "\u{1F637}", "\u{1F638}", "\u{1F639}"
];

for (const emoji of emojis) {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";
    emojiItem.innerHTML = `<p>${emoji}</p><p class="emoji-code">${getEmojiCode(emoji)}</p>`;
    emojiGallery.appendChild(emojiItem);
}

function getEmojiCode(emoji) {
    const codePoint = emoji.codePointAt(0);
    const hexCode = codePoint.toString(16).toUpperCase();
    return hexCode;
}