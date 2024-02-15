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
  console.log(postText)
}

// Arc browser boost code to copy data to clipboard
document.addEventListener('keydown', async (event) => {
  // Check for CMD + B on MacOS or CTRL + B on Windows/Linux
  if ((event.metaKey || event.ctrlKey) && event.key === 'b') {
    event.preventDefault(); // Prevent the default action to avoid triggering browser behavior

    const textToCopy = {
      title: document.title,
      text: document.querySelector(".post_content") ? document.querySelector(".post_content").innerText : "N/A"
    };

    console.log(textToCopy);
    try {
      await navigator.clipboard.writeText(JSON.stringify(textToCopy));
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }
});
