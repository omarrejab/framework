import './footer.css'

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <p>Gestion des étudiants - Projet universitaire</p>
      <span className="footer-copy">© {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
