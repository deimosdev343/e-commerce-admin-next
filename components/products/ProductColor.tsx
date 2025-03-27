const ProductColor = ({color, onRemoveColor} : {color: string, onRemoveColor: Function}) => {
  return (
    <div
    className="flex flex-row p-2 gap-2 rounded-lg shadow-lg"
    style={{
      backgroundColor:color
    }}
    >
       <button onClick={() => onRemoveColor(color)} className={`${color === "#ffffff" ? "text-black" :"text-white" } font-bold hover:cursor-pointer`}>X</button>
       <h2 className={`${color === "#ffffff" ? "text-black" :"text-white" } font-bold`}>{color}</h2>
    </div>
  )
}

export default ProductColor