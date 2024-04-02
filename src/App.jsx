import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import React from 'react'
import { PackingList } from './components/PackingList'
import { Stats } from './components/Stats'

function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteAllItems() {
    setItems([])
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteAll={handleDeleteAllItems}
        onDeleteItem={handleDeleteItem}
        items={items}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
