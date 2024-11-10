import React from 'react'
import './styles.css'

export default function ItemList({title, description,url}) {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p><a href={url} target='_blank' rel="noreferrer">{url}</a></p>
        <p>{description}</p>
        <hr />
    </div>
  )
}