function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  var node = document.querySelector("div#grand-node")
  var children = node.children[0]

  while (children)  {
    node = children
    children = node.children[0]
  }

  return node
}

function increaseRankBy(n)  {
  var list = document.querySelectorAll(".ranked-list")
  for(var i = 0; i < list.length; i++)  {
    var children = list[i].children

  for(var x = 0; x < children.length; x++) {
    var number = parseInt(children[x].innerHTML) + n
    children[x].innerHTML = number.toString()
  }
  }
}