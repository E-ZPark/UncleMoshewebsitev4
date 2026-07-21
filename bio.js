const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

module.exports = function () {
  const filePath = path.join(__dirname, "..", "content", "bio.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  // The Decap "files" collection stores the markdown widget content
  // under a `body` frontmatter key rather than as the file's main content.
  const bodyText = parsed.data.body || parsed.content || "";
  return {
    body: md.render(bodyText),
  };
};
