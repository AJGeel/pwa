var emojiMatrix = ['🥑', '☕️', '🍻', '🥃', '🍾', '🥃', '🍪', '🎉', '🔭', '🖥', '💻', '🎧', '❤️', '💛', '💚', '💙', '💜', '💖', '💝', '🎶', '🤘', '👐', '🤞', '☘', '👀', '👓', '⏱', '⏳', '🔋', '💡', '🔨',];
var emojiNumber = Math.floor(emojiMatrix.length*Math.random());
document.getElementById('footerEmoji').innerHTML = emojiMatrix[emojiNumber];
