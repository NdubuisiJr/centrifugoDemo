module.exports = {
  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "aaaf202f-b5f8-4b34-bf88-f6c03a1ecda6", //"58c2400b-831d-411d-8fe8-31b6e337738b",
  SOCKET_URL: process.env.SOCKET_URL || "http://localhost:8000/api", //"https://realtime.zuri.chat/api",
};
