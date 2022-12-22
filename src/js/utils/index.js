const decodeId = (bufferArray) => {
  return Buffer.from(bufferArray).toString('hex');
};

module.exports = { decodeId };
