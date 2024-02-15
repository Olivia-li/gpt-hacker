function grabLinks() {
  const firstPost = document.querySelector(".post_content")
  const links = firstPost.querySelectorAll("a")

  Array.from(links).forEach((link, index) => {
    console.log(`Link #${index + 1}: Text - ${link.textContent.trim()}, URL - ${link.href}`)
  })

  let linksData = Array.from(links).map((link) => ({ text: link.textContent.trim(), url: link.href }))
  console.log(linksData)

  copy(JSON.stringify(linksData))
}

function grabTutorialText() {
  const firstPost = document.querySelector(".post_content")
  const postText = firstPost.innerText || "N/A"
  return postText 
}
