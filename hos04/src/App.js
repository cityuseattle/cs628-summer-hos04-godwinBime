import {useState} from 'react';

export default function Accordion(){
  const [activateIndex, setActivateIndex] = useState(0);
  return(
    <>
      <h2>Almaty, Kazakhastan</h2>
        <Panel
        title="About"
        isActive={activateIndex === 0}
        onShow={() => setActivateIndex(0)}>
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>  

        <Panel title='Etimology'
        isActive={activateIndex === 1}
        onShow={() => setActivateIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>  
    </>
  );
}

function Panel({title, children, isActive, onShow}){
  return(
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}