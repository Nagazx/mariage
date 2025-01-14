import React from 'react';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
      <h1 className="text-4xl font-bold mb-4">Mariage de Quentin & Emma le 31 mai 2025</h1>
      <div className="mt-4">
        <a href="/informations" className="bg-white text-black py-2 px-4 rounded-lg mx-2">Infos Mariage</a>
        <a href="/hebergement" className="bg-white text-black py-2 px-4 rounded-lg mx-2">Hébergements</a>
        <a href="/cadeaux" className="bg-white text-black py-2 px-4 rounded-lg mx-2">Liste de Cadeaux</a>
      </div>
    </header>
  );
};

export default Header;