import React, { useState } from 'react';

function SearchBar() {
  // Utilisation de l'état pour la saisie de la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction de gestion des événements pour mettre à jour l'état de la recherche
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction qui peut être utilisée pour rechercher ou filtrer des données
  const handleSearch = () => {
    console.log('Recherche en cours pour :', searchTerm);
    // Ici, vous pouvez ajouter votre logique de recherche ou de filtrage
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange} // Met à jour l'état à chaque changement de saisie
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}

export default SearchBar;
