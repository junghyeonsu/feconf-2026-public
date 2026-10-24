import fs from 'node:fs/promises';

// Read the limited document format we author, without executing Markdown/HTML.
export async function readPresentation(file, ids, notes) {
  const markdown = await fs.readFile(file, 'utf8');
  const sections = markdown.split(/^## /m).slice(1);
  if (sections.length !== ids.length || notes.length !== ids.length) {
    throw new Error('Slide, script, and note counts must match.');
  }
  return sections.map((section, index) => {
    const [heading, ...lines] = section.split('\n');
    const match = heading.match(/^(\d+) · (\w+) · (.+)$/);
    if (!match || Number(match[1]) !== index + 1 || match[2] !== ids[index]) {
      throw new Error(`Script order mismatch on page ${index + 1}.`);
    }
    const [spoken, references = ''] = lines.join('\n').split('\n### 참고 링크\n');
    if (spoken.trim() !== notes[index].trim()) {
      throw new Error(`Script differs from slide notes on page ${index + 1}.`);
    }
    const links = references.split('\n').filter(line => line.startsWith('- ')).map(line => {
      const link = line.match(/^- \[(.+)\]\((https:\/\/[^\s)]+)\)$/);
      if (link) return { label: link[1], url: new URL(link[2]).href };
      if (line.includes('](')) throw new Error(`Invalid reference on page ${index + 1}.`);
      return { label: line.slice(2) };
    });
    return { id: ids[index], title: match[3], note: notes[index], links };
  });
}
