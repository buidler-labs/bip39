function HederaBufferToPublic(pubBuf) {
  if (!Buffer.isBuffer(pubBuf)) throw new Error("Expected Buffer");

  if (pubBuf.length === 33 && (pubBuf[0] === 0x02 || pubBuf[0] === 0x03)) {
    return "0x" + pubBuf.toString("hex");
  }

  if (pubBuf.length === 65 && pubBuf[0] === 0x04) {
    return "0x" + pubBuf.toString("hex");
  }

  if (pubBuf[0] === 0x00) {
    return "0x" + pubBuf.slice(1).toString("hex");
  }

  return "0x" + pubBuf.toString("hex");
}

function HederaBufferToPrivate(privBuf) {
  if (!Buffer.isBuffer(privBuf)) throw new Error("Expected Buffer");

  if (privBuf.length !== 32) {
    console.warn("Private key length is not 32 bytes:", privBuf.length);
  }

  return "0x" + privBuf.toString("hex");
}
