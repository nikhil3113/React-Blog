const Header = () => {
  return (
    <header className="header">
        <div className="head1">
            <img src={"https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
                alt="logo" className="img-head" />
        </div>
        <div className="head2">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link3</a>
        </div>
    </header>
  )
}

export default Header