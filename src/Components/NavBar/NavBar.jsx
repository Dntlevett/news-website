import "./navBar.scss";

function NavBar() {
  return (
    <>
      <header className="navBar">
        <div className="navBar__logo">
          <h1>Tri-City News</h1>
        </div>
        <nav className="navBar__links">
          <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/opinion">Opinion</a>
          <a href="/arts-life">Arts & Life</a>
          <a href="/features">Features</a>
          <a href="/homes">Homes</a>
          <a href="/classifieds">Classifieds</a>
          <a href="/obituaries">Obituaries</a>
          <a href="/public-notices">Public Notices</a>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
