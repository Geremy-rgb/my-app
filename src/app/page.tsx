"use client"

import React, { useState } from "react";
import "./ui/globals.css";

const Page: React.FC = () => {
  const [biography, setBiography] = useState<string>("");
  const [savedBiography, setSavedBiography] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBiography(event.target.value);
  };

  const handleSave = () => {
    setSavedBiography(biography);
  };

  return (
    <div className="App">
      <h1>Biografía Personal</h1>

      {/* Campo de texto para la biografía */}
      <textarea
        placeholder="Ingresa tu biografía aquí"
        value={biography}
        onChange={handleChange}
        rows={10}
        cols={50}
      />

      <div>
        <button onClick={handleSave}>Guardar Biografía</button>
      </div>

      {/* Mostrar la biografía guardada */}
      {savedBiography && (
        <div className="saved-biography">
          <h2>Biografía Guardada:</h2>
          <p>{savedBiography}</p>
        </div>
      )}
    </div>
  );
};

export default Page;