import './PrimaryNav.css'

export const PrimaryNav = () => {
    const navConfig = [
        {
          id: 1,
          title: 'Collections',
        },
        {
          id: 2,
          title: 'Customs',
          link: '/gallery/4'
        },
        {
          id: 3,
          title: 'Catalog'
        }
      ]

    return <nav className="primary-nav">
    <ul className="nav-links">
      {navConfig.map(item => (
        <li key={item.id} className="nav-link">
        <h1><a href={ item.link ?? `/${item.title.toLowerCase()}`}>{item.title}</a></h1>
        </li>
      ))}     
    </ul>
  </nav>
}