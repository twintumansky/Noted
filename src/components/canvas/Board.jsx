import { Tldraw } from 'tldraw'

export default function Board() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#fbfbfb]">
      <Tldraw
        hideUi={true}
        inferDarkMode={false}
        onMount={(editor) => {
          editor.updateInstanceState({ isGridMode: true });
          editor.setCamera({ x: 0, y: 0, z: 1 });
        }} 
      />
      <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
        100%
      </div>
    </div>
  )
}