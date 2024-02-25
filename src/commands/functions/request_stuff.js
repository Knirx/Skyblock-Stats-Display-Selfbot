const token = process.env.TOKEN

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      }
}

module.exports = {
    headers
}