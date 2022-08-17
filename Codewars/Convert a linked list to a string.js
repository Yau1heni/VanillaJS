function stringify(list) {
    if (list == null) return 'null' 
    else return `${list.data} -> ${stringify(list.next)}`
  }