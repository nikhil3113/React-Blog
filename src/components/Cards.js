const Cards = ({link, title}) => {
  return (
<div className="card" style={{width:"27.5%"}}>
        <img src={link} alt="Avatar" className="Avatar"  />
    <div className="container">
        <h4><b>{title}</b></h4>
    </div>
</div>
  )
}

export default Cards