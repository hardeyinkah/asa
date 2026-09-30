export function scrollToId(id) {
  const node = document.getElementById(id)
  if (!node) return false

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  node.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "center",
  })
  return true
}
