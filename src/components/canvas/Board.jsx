import { Tldraw } from 'tldraw'

export default function Board() {
  return (
    <div className="absolute inset-0">
      <Tldraw
        hideUi={false}
        onMount={(editor) => {
          console.log('Canvas Mounted', editor);
        }} 
      />
    </div>
  )
}