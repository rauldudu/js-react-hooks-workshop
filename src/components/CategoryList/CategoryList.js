import React from 'react'
import LabelList from '../LabelList/LabelList'
import MultiSelect from '../MultiSelect/MultiSelect'

import './CategoryList.scss'

const CategoryList = ({
  categories,
  selectedCategories,
  onSelect,
  onRemove,
  onReset
}) => {
  return (
    <div className="category-list">
      <LabelList labels={selectedCategories} onRemove={onRemove} />
      <MultiSelect
        className="category-list__selector"
        triggerTitle="Categories"
        multiSelectId="categories"
        options={categories}
        values={selectedCategories}
        onSelect={onSelect}
        onReset={onReset}
      />
    </div>
  )
}

export default CategoryList
