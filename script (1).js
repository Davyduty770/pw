document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide // Assuming lucide is available globally
  lucide.createIcons()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Attempt to unmute video
  function attemptUnmute() {
    const iframe = document.querySelector("iframe")
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "unMute",
        }),
        "*",
      )
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "setVolume",
          args: [100],
        }),
        "*",
      )
    }
  }

  // Try to unmute after a short delay
  setTimeout(attemptUnmute, 1000)

  // Add click event listener to unmute button
  const unmuteButton = document.querySelector(".btn-unmute")
  unmuteButton.addEventListener("click", attemptUnmute)
})

