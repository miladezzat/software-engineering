import levenshtien from 'damerau-levenshtein';


export function filter(posts, search = "") {
  const results = posts.map((post) => {

    const tag = post.tags ? post.tags[0] : "";

    const title = post.id + " " + tag + " " + post.title;

    return { post, lev: levenshtien(title.toLowerCase(), search.toLowerCase()) }
  })
    .sort((a, b) => (b.lev.similarity - a.lev.similarity))
    .slice(0, 10);


  return results.map((result) => result.post)
}