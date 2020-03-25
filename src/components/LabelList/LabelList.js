import React from 'react'

import './LabelList.scss'

const LabelList = ({ labels, onRemove }) => {
  return (
    <ul className="label-list">
      {labels.map(label => (
        <li className="label-list__item" key={label.id}>
          {label.label}
          <button
            className="label-list__item-btn"
            onClick={() => onRemove(label)}>
            &#10006;
          </button>
        </li>
      ))}
    </ul>
  )
}

export default LabelList
