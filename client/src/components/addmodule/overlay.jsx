function Overlay({ hidden, setHidden }) {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50`}
      onClick={() => {
        setHidden(false);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
      }}
    ></div>
  );
}

export default Overlay;
