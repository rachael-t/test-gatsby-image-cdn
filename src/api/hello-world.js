export default function handler(req, res) {
    console.log('node version: ', process.version);
    res.status(200).json({ hello: `world` })
  }