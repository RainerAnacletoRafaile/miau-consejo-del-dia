const catAnimations = {
  feliz: "/images/gatitos/feliz.gif",
  alegre: "/images/gatitos/alegre.gif",
  triste: "/images/gatitos/triste.gif",
  molesta: "/images/gatitos/molesta.gif",
  tranquila: "/images/gatitos/tranquila.gif",
};

export default function CatMascot({ mood }) {
  const image = catAnimations[mood?.id] || "/images/gatitos/inicio.png";

  return (
    <div className="cat-mascot" aria-label={`Gatita ${mood?.label || ""}`}>
      <img
        key={image}
        className="cat-mascot-image"
        src={image}
        alt={`Gatita ${mood?.label || "MIAU"} animada`}
      />
    </div>
  );
}
