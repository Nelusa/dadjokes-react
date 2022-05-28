import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Joke from './Joke/index.jsx';
import { jokes } from './jokes.js';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

//---------------------------------------------------//

// Komponenta App z úkolu č. 14 (pro přehlednost ohledně změn mezi úkoly 14 a 15, i když je poznat z commitu - tam však CHYBÍ OPRAVA CLASS NA CLASSNAME --> opraveno v rámci úkolu č. 15)
/*const App = () => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setLikesUp(likesUp + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likesUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setLikesDown(likesDown + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likesDown}
          </span>
        </div>
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />); */
