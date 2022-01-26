import Image from "next/image";

const ImageGenerator = ({imageNumber, handleSelect, selection}) => {
  return (
    <div className='p-2' style={{height: '150px', overflow: 'auto'}}>
      {
        Array(imageNumber).fill(null).map((value, idx) => {
          const imageNum = idx % 5 + 1
          return (<Image
            id={`image_${idx}`}
            key={idx}
            src={`/images/foto${imageNum === 5 ? `${imageNum}.png` : `${imageNum}.jpg`}`}
            alt={`foto${imageNum}`}
            width="64"
            height="64"
            onClick={handleSelect}
            className={(selection === `image_${idx}`) && 'border border-primary border-3'}
          />)
        })
      }
    </div>
  )
}

export default ImageGenerator
