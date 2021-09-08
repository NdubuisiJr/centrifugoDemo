const axios = require("axios");
const { SOCKER_KEY, SOCKET_URL } = require("./config");

class centrifugoPublisher {
  static async publish(channel, data) {
    try {
      const response = await axios.post(
        SOCKET_URL,
        {
          method: "publish",
          params: {
            channel,
            data,
          },
        },
        {
          headers: {
            Authorization: `apikey ${SOCKER_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      // handle error better
      console.log(error);
    }
  }
}

module.exports = centrifugoPublisher;
