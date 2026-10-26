import { useState } from 'react'
import heroImg from './assets/omar.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
const etudiant = {
  nom : "Rejab",
  prenom : "Omar",
  Email : "rjab2057@gmail.com" ,
  Teléphone : "+216 23 003 666",
  Filére : "Génie logiciel et systemes d'information",
  Annéedetude : "2éme",
  Groupe : "GLSI2",
  Ville : "Ariana",
  image: heroImg
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fiche étudiant</h1> <br />
      <img src={etudiant.image} alt="" />
      <h3><span id='np'>Nom & prénom :</span> {etudiant.nom} {etudiant.prenom} </h3>
      <h3><span id='email'>Email :</span>  {etudiant.Email} </h3>
      <h3><span id='tel'>Teléphone :</span>  {etudiant.Teléphone}</h3>     
      <h3><span id='fi'>Filére :</span> {etudiant.Filére} </h3>
      <h3><span id='ae'>Année d'etude :</span> {etudiant.Annéedetude}</h3>
      <h3><span id='g'>Groupe :</span>  {etudiant.Groupe}</h3>
      <h3><span id='v'>Ville :</span> {etudiant.Ville} </h3>
      <a href="mailto:rjab2057@gmail.com">
        <button id='bt'>contacter</button>
      </a>
    </div>
  )
}
export default App
