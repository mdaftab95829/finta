function Header() {
  const now = new Date().toLocaleTimeString();
  return (
    <>
      <div className="Header">
        <h1>Magically simplify</h1>
        <h1>accounting and taxes</h1>
        <div className="text">
          <p>
            Automated book keeping, effortless tax filing, real‑time insights.
          </p>
          <p>Set up in 10 mins. Back to building by {now}.</p>
        </div>
        <button className="btn">Get Started</button>
        <button className="second">
          Pricing
          <span>
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
        </button>
        <p className="text">Currently for US-based Delaware C-Corps.</p>
      </div>
    </>
  );
}
export default Header;
