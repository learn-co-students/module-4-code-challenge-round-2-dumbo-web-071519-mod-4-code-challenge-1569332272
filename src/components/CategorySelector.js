import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {
console.log(props)
  const categoryFields = categories.map((category, i) => <CategoryField
      key={ i }
      checked={ category === props.sortTerm }
      category={ category }
      onChange={ props.handleRadio }
    />)

  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          { categoryFields }
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
