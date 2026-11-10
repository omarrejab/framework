import { useState } from 'react'
import './studentcard.css'

function StudentCard({ etudiant, onDelete }) {
  const [showDetails, setShowDetails] = useState(false)
  const initials = `${etudiant.prenom[0]}${etudiant.nom[0]}`.toUpperCase()

  return (
    <article className="student-card">
      <div className="card-topline">
        <span className="student-status"><span /> Étudiant</span>
        <button
          className="delete-student"
          type="button"
          aria-label={`Supprimer ${etudiant.prenom} ${etudiant.nom}`}
          onClick={onDelete}
        >
          ×
        </button>
      </div>
      <div className="student-identity">
        {etudiant.image ? (
          <img
            className="student-photo"
            src={etudiant.image}
            alt={`${etudiant.prenom} ${etudiant.nom}`}
          />
        ) : (
          <div className="student-avatar" aria-hidden="true">{initials}</div>
        )}
        <div className="student-name">
          <h3>{etudiant.prenom} {etudiant.nom}</h3>
          <p>{etudiant.filiere}</p>
        </div>
      </div>
      <div className="student-tags">
        <span>{etudiant.anneeEtude} année</span>
        <span>Groupe {etudiant.groupe}</span>
      </div>
      <button
        className="details-button"
        type="button"
        aria-expanded={showDetails}
        aria-controls={`details-${etudiant.id}`}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
      </button>
      <div id={`details-${etudiant.id}`} hidden={!showDetails}>
        <dl className="student-details">
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${etudiant.email}`}>{etudiant.email}</a></dd>
          </div>
          <div>
            <dt>Téléphone</dt>
            <dd><a href={`tel:${etudiant.telephone.replaceAll(' ', '')}`}>{etudiant.telephone}</a></dd>
          </div>
          <div>
            <dt>Ville</dt>
            <dd>{etudiant.ville}</dd>
          </div>
        </dl>
        <a className="contact-link" href={`mailto:${etudiant.email}`}>
          Contacter l’étudiant <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default StudentCard
