import PropTypes from 'prop-types'
import Button from './button'

const Header = (props) => {
  const onClick = () => {
    console.log('Mothafucka')
  }

  return (
    <header className='Header'>
        <h1>{props.title}</h1>
        <Button color='green' onClick={onClick}/>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;