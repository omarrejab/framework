import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Navbar from './navbar.jsx'
import StudentCard from './studentcard.jsx'
import Footer from './footer.jsx'
import omarImage from '../assets/omar.jpg'
import secondStudentImage from '../assets/yy.jpg'

const initialStudents = [
  {
    id: 1,
    nom: 'Rejab',
    prenom: 'Omar',
    email: 'rjab2057@gmail.com',
    telephone: '+216 23 003 666',
    filiere: 'Génie logiciel et systèmes d’information',
    anneeEtude: '2ème',
    groupe: 'GLSI2',
    ville: 'Ariana',
    image: omarImage,
  },
  {
    id: 2,
    nom: 'Ben Ali',
    prenom: 'Amira',
    email: 'amira@example.com',
    telephone: '+216 20 000 000',
    filiere: 'Génie logiciel et systèmes d’information',
    anneeEtude: '2ème',
    groupe: 'GLSI2',
    ville: 'Tunis',
    image: secondStudentImage,
  },
  {
    id: 3,
    nom: 'Ben Gamra',
    prenom: 'Faouzi',
    email: 'faouzi@example.com',
    telephone: '+216 21 000 000',
    filiere: 'Génie logiciel et systèmes d’information',
    anneeEtude: '2ème',
    groupe: 'GLSI2',
    ville: 'Tunis',
    image: null,
  },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  function addStudent(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const imageFile = formData.get('image')

    const newStudent = {
      id: Date.now(),
      nom: formData.get('nom').trim(),
      prenom: formData.get('prenom').trim(),
      email: formData.get('email').trim(),
      telephone: formData.get('telephone').trim(),
      filiere: formData.get('filiere'),
      anneeEtude: formData.get('anneeEtude').trim(),
      groupe: formData.get('groupe').trim(),
      ville: formData.get('ville').trim(),
      image: imageFile.size > 0 ? URL.createObjectURL(imageFile) : null,
    }

    setStudents((currentStudents) => [...currentStudents, newStudent])
    setSearch('')
    form.reset()
    setShowForm(false)
  }

  const searchText = search.trim().toLowerCase()
  const filteredStudents = students.filter((student) => {
    const studentInfo =
      student.prenom +
      ' ' +
      student.nom +
      ' ' +
      student.email +
      ' ' +
      student.telephone +
      ' ' +
      student.filiere +
      ' ' +
      student.anneeEtude +
      ' ' +
      student.groupe +
      ' ' +
      student.ville

    return studentInfo.toLowerCase().includes(searchText)
  })

  function deleteStudent(studentId) {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId),
    )
  }

  return (
    <div className="app-shell">
      <Header />
      <Navbar />

      <main>
        <h2 id="accueil">Liste des étudiants</h2>
        <p>Cette page permet de consulter et gérer les étudiants.</p>

        <section id="etudiants">
          <h3>Rechercher un étudiant</h3>
          <input
            className="search-input"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Nom, filière, ville..."
            aria-label="Rechercher un étudiant"
          />
          <p>{filteredStudents.length} étudiant(s) trouvé(s)</p>

          <button type="button" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Fermer' : 'Ajouter un étudiant'}
          </button>

          {showForm && (
            <form className="student-form" onSubmit={addStudent}>
              <h3>Ajouter un étudiant</h3>
              <label>
                Prénom
                <input name="prenom" type="text" required />
              </label>
              <label>
                Nom
                <input name="nom" type="text" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Téléphone
                <input name="telephone" type="tel" required />
              </label>
              <label>
                Filière
                <select name="filiere" defaultValue="" required>
                  <option value="" disabled>Choisir une filière</option>
                  <option value="GLSI">GLSI</option>
                  <option value="DSI">DSI</option>
                  <option value="RSI">RSI</option>
                </select>
              </label>
              <label>
                Année d’étude
                <input name="anneeEtude" type="text" required />
              </label>
              <label>
                Groupe
                <input name="groupe" type="text" required />
              </label>
              <label>
                Ville
                <input name="ville" type="text" required />
              </label>
              <label>
                Photo (facultative)
                <input name="image" type="file" accept="image/*" />
              </label>
              <button type="submit">Enregistrer</button>
            </form>
          )}

          <div className="students-list">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                etudiant={student}
                onDelete={() => deleteStudent(student.id)}
              />
            ))}
            {filteredStudents.length === 0 && <p>Aucun étudiant trouvé.</p>}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
