module.exports = {
  config: {
    name: "spam",
    author: "kim/zed", // Fixed spelling
    role: 2,
    shortDescription: "Spam messages safely with delay",
    longDescription: "Send a message multiple times with a small delay to avoid rate limit.",
    category: "sophia",
    guide: "{pn} [amount] [message]"
  },

  onStart: async function ({ api, event, args }) {
    const amount = parseInt(args[0]);
    const message = args.slice(1).join(" ");

    if (isNaN(amount) || !message) {
      return api.sendMessage("❌ ব্যবহার: /spam [amount] [message]", event.threadID);
    }

    // limit to prevent abuse
    if (amount > 50) {
      return api.sendMessage("⚠️ সর্বোচ্চ 50 বার পর্যন্ত স্প্যাম করা যাবে!", event.threadID);
    }

    for (let i = 0; i < amount; i++) {
      api.sendMessage(`${message}`, event.threadID);
      await new Promise(resolve => setTimeout(resolve, 2000)); // প্রতি 2 সেকেন্ডে পাঠাবে
    }
  },
};
