const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
  config: {
    name: "out",
    aliases: ["o"],
    version: "1.1",
    author: "Modified by Xalman",
    countDown: 5,
    role: 2,
    shortDescription: "bot will leave gc",
    longDescription: "",
    category: "admin",
    guide: {
      vi: "{pn} [tid,blank]",
      en: "{pn} [tid,blank]"
    }
  },

  onStart: async function ({ api, event, args, message }) {

    // ✅ UID Lock
    const allowedUID = "100081088184521"; // Only you
    if (event.senderID !== allowedUID) {
      return api.sendMessage("❌ You are not allowed to use this command!", event.threadID);
    }

    var id;
    if (!args.join(" ")) {
      id = event.threadID;
    } else {
      id = parseInt(args.join(" "));
    }

    const leaveMessage = 
`𝐗𝐚𝐝𝐢𝐤𝐚 𝐥𝐞𝐟𝐭 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩..!🦆💨 
𝐎𝐫𝐝𝐞𝐫𝐞𝐝 𝐛𝐲 𝐦𝐲 𝐛𝐨𝐬𝐬 𝐍𝐗..!🦆💨`;

    return api.sendMessage(leaveMessage, id, () => 
      api.removeUserFromGroup(api.getCurrentUserID(), id)
    );
  }
        }
