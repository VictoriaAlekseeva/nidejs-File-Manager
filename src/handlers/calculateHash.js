import { open } from 'fs/promises';
import { createHash } from 'crypto';
import { existsSync } from 'fs';

export const calculateHash = async (input) => {
    try {
        const filePath = input.slice(5).trim();

        if (!existsSync(filePath)) throw new Error('Invalid input: no such file');

        const hash = createHash('sha256');
        const fd = await open(filePath);

        const readableStream = fd.createReadStream(filePath);

        readableStream.on("data", (chunk) => hash.update(chunk));
        readableStream.on("end", () => console.log(hash.digest('hex')));
        readableStream.on("error", (error) => console.error("Operation failed", error.message));
    } catch (err) {
        if (err.code === undefined) {
            console.error(err.message)
        } else console.error('Operation failed')
    }
};
