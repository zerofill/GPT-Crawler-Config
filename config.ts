import { Config } from "./src/config";

// Read command line arguments
const args = process.argv.slice(2);

// Ensure all required arguments are provided
if (args.length < 5) {
  console.error("Error: Missing required arguments.");
  console.error("Usage: npm start <url> <match> <maxPagesToCrawl> <outputFileName> <maxTokens>");
  process.exit(1);
}

const url = args[0];
const match = args[1];
const maxPagesToCrawl = parseInt(args[2]);
const outputFileName = args[3];
const maxTokens = parseInt(args[4]);

export const defaultConfig: Config = {
  url: url,
  match: match,
  maxPagesToCrawl: maxPagesToCrawl,
  outputFileName: outputFileName,
  maxTokens: maxTokens,
};
