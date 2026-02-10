/**
 * Ensures NEXTAUTH_URL has no spaces or duplicate "https://" before Next.js build.
 * Vercel (or user) may set it with typos like "https://   https://cashwisekids.com".
 * Runs next build with the sanitized env so the child process sees a valid URL.
 */
const { spawnSync } = require("child_process");
const path = require("path");

const raw = process.env.NEXTAUTH_URL || "";
const trimmed = raw.trim().replace(/\s+/g, "");
// If still malformed (e.g. "https://https://..."), take only the last valid URL
let url = trimmed;
if (trimmed.includes("https://", 1)) {
  const last = trimmed.lastIndexOf("https://");
  url = trimmed.slice(last);
} else if (trimmed.includes("http://", 1)) {
  const last = trimmed.lastIndexOf("http://");
  url = trimmed.slice(last);
}
if (!url.startsWith("http")) {
  url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`
    : "http://localhost:3000";
}

const env = { ...process.env, NEXTAUTH_URL: url };
const result = spawnSync("npx", ["next", "build"], {
  env,
  stdio: "inherit",
  cwd: path.resolve(__dirname, ".."),
});
process.exit(result.status ?? 1);
