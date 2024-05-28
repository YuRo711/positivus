import "./CaseStudies.css";

function CaseStudies(props) {
  return (
    <div className="case-studies">
      <div className="case-studies__container">
        <div className="case-studies__case">
          <p className="case-studies__text">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <button className="case-studies__button">
            Learn more
            <div className="case-studies__button-icon"></div>
          </button>
        </div>
        <div className="case-studies__separator"></div>
        <div className="case-studies__case">
          <p className="case-studies__text">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <button className="case-studies__button">
            Learn more
            <div className="case-studies__button-icon"></div>
          </button>
        </div>
        <div className="case-studies__separator"></div>
        <div className="case-studies__case">
          <p className="case-studies__text">
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <button className="case-studies__button">
            Learn more
            <div className="case-studies__button-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
