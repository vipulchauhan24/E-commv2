import React from 'react'

export default function PreviewCollectionComponent({title, items}) {
  return (
    <div>
        <h1 className="collection-preview">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.map(item=>{
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </div>
    </div>
  )
}
