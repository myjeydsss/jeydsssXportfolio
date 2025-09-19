export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Jaydie Ranes</small>
        <div className="socials">
          <a
            href="https://github.com/myjeydsss"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/jaydie-ranes-7b70b4375"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="ijaydieranes@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
