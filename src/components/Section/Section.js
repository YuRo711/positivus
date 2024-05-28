import './Section.css';

function Section(props) {
  return (
    <section className="section">
      <div className='section__header'>
        <h2 className='section__title'>{props.title}</h2>
        <p className={`section__description section__description_${props.descLen}`}>
          {props.description}
        </p>
      </div>
      {props.children}
    </section>
  );
}

export default Section;
