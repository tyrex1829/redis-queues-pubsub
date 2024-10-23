import { createClient } from "redis";

const client = createClient();
client.connect();

async function main() {
  while (1) {
    const response = await client.brPop("submissions", 0);
    console.log(response);
  }
}

main();
