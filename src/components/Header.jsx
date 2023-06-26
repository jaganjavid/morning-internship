const Header = ({text, bgColor}) => {


  const styles = {
    backgroundColor:bgColor,
    color:"#ffffff"
}  

  return (
    <header style={styles}>
        <div className="container">
            <h4>{text}</h4>
        </div>
    </header>
  )
}

export default Header;

Header.defaultProps = {
    text:"Review App",
    bgColor:"rgba(0,0,0,0.3"
}

// rafce