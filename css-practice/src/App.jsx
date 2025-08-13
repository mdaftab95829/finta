import "./App.css";
import Header from "./Header";
import Image from "./Image";
function App() {
  const list = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "google.com",
    },
    {
      title: "Log In",
      href: "#",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="line-left"></div>
        <div className="line-right"></div>
        <nav>
          <div className="log">
            <h1>Finta</h1>
          </div>
          <div className="header-link">
            {list.map((list, index) => (
              <div className="link-div" key={index}>
                <a href={list.href}>{list.title}</a>
              </div>
            ))}
            <div>
              <button className="btn">Start Free Trial</button>
            </div>
          </div>
        </nav>
        <div className="hero-section">
          <div>
            <span>
              QSBS just got better in July 2025
              <svg width="16" height="16" fill="none">
                <path
                  stroke="#1E1F25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-opacity=".5"
                  stroke-width="1.25"
                  d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <Header></Header>
      </div>
      <div>
        <Image></Image>
      </div>
    </>
  );
}
export default App;
