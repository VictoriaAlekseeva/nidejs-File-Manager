import { createReadStream } from 'node:fs';
import { createHash } from 'crypto';

export const calculateHash = async (input) => {
    const hash = createHash('sha256');
    const filePath = input.slice(5)
    const file = createReadStream(filePath);
    file.on('readable', () => {
        const data = file.read();
        if (data)
            hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    })
};
