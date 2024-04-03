import "./PrimaryNav.css";

export const PrimaryNav = () => {
  const navConfig = [
    {
      id: 1,
      title: "collections",
    },
    {
      id: 2,
      title: "customs",
      link: "/gallery/4",
    },
    {
      id: 3,
      title: "catalog",
    },
  ];

  return (
    <nav className="primary-nav">
      <ul className="nav-links">
        {navConfig.map((item) => (
          <li key={item.id} className="nav-link">
            <a href={item.link ?? `/${item.title.toLowerCase()}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
