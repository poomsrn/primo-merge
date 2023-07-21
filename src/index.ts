import { merge } from "./merge";
import readline from "readline";

function readLineAsync(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const input1 = await readLineAsync(
    "Enter sorted array collection1 (space-separated numbers): "
  );
  const collection1 = input1.split(" ").map(Number);

  const input2 = await readLineAsync(
    "Enter sorted array collection2 (space-separated numbers): "
  );
  const collection2 = input2.split(" ").map(Number);

  const mergeArr = merge(collection1, collection2);

  console.log("Output:", mergeArr);
}

main().catch((error) => console.error("Error:", error));
