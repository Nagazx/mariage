import ButtonLink from './ButtonLink.jsx';

const GiftList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cadeaux de Mariage</h1>
      <p className="mb-4">Voici une liste des cadeaux que nous aimerions recevoir :</p>
      <ul className="list-disc list-inside">
        <li><ButtonLink href="https://www.exemple.com/liste-cadeaux1">Liste de cadeaux 1</ButtonLink></li>
        <li><ButtonLink href="https://www.exemple.com/liste-cadeaux2">Liste de cadeaux 2</ButtonLink></li>
        <li><ButtonLink href="https://www.exemple.com/liste-cadeaux3">Liste de cadeaux 3</ButtonLink></li>
      </ul>
    </div>
  );
};

export default GiftList;
