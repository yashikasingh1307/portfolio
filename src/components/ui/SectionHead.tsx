interface SectionHeadProps {
  number: string;
  title: string;
  id: string;
}

function SectionHead({ number, title, id }: SectionHeadProps) {
  return (
    <header className="section-head">
      <span className="section-head__number">{number}</span>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      <span className="section-head__rule" aria-hidden="true"></span>
    </header>
  );
}

export default SectionHead;
