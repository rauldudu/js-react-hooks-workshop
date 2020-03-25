import React, { useState, useRef, useEffect, forwardRef } from 'react'

import './MultiSelect.scss'

const List = forwardRef(({ multiSelectId, options, values, onSelect }, ref) => {
  return (
    <ul className="multi-select__list" ref={ref}>
      {options.map(option => {
        const checked = !!values.find(el => el.id === option.id)
        return (
          <li key={option.id}>
            <input
              id={`${multiSelectId}-checkbox-${option.id}`}
              type="checkbox"
              checked={checked}
              onChange={e => {
                onSelect(option)
              }}
              value={option.id}
            />
            <label htmlFor={`${multiSelectId}-checkbox-${option.id}`}>
              {option.label}
            </label>
          </li>
        )
      })}
    </ul>
  )
})

const MultiSelect = ({
  className,
  multiSelectId,
  triggerTitle,
  options,
  values,
  onSelect
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const triggerRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const listener = e => {
      if (listRef.current) {
        const isClickInside =
          listRef.current.contains(e.target) ||
          triggerRef.current.contains(e.target)

        if (!isClickInside) {
          setIsVisible(false)
        }
      }
    }

    document.addEventListener('click', listener)

    return () => document.removeEventListener('click', listener)
  }, [])

  useEffect(() => {
    if (listRef.current && isVisible) {
      listRef.current.focus()
    }
  }, [isVisible])

  return (
    <div className="multi-select">
      <button
        ref={triggerRef}
        className={`multi-select__trigger ${className}`}
        onClick={() => setIsVisible(b => !b)}>
        {triggerTitle} ▼
      </button>
      {isVisible && (
        <List
          ref={listRef}
          multiSelectId={multiSelectId}
          options={options}
          values={values}
          onSelect={onSelect}
        />
      )}
    </div>
  )
}

MultiSelect.defaultProps = {
  className: ''
}

export default MultiSelect
