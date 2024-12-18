import { memo } from "react";


const ShowIncrement = ({ increment }) => {

  console.log('me volvi a rendirezar');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment()
      }}
    >
      Incrementar
    </button>
  )
}

export default memo(ShowIncrement);