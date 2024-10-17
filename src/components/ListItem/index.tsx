import './listItem.css'

interface ListItemProps {
  title: string
}

function ListItem({title}: ListItemProps) {
  return (
    <div className='product-item'>
      <div className='product-img'>

      </div>
      <div className='product-name'>
        {title}
      </div>
      <div className='product-checkbox'>

      </div>
    </div>
  )
}

export { ListItem }
