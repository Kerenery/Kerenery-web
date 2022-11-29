const items = document.querySelectorAll('.item-slider')

console.log(items)

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.killTweensOf(items)
  gsap.to(items, {
    width: item.clicked ? '20vw' : '8vw',
    duration: 1,
    ease: 'power4.out',
  })
  
  gsap.killTweensOf(item)
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '20vw',
    duration: 1,
    ease: 'power4.out',
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

setTimeout(() => {
  items[0].click()
}, 1000)