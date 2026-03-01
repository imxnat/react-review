import './style.css';
// import './bases/practice-03';
// import './bases/practice-self';
import { getHeroesByOwner } from './bases/practice-03';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite + TypeScript!</h1>
  </div>
`;
console.log(getHeroesByOwner('DC'))

