import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";

export class FolderShapeUtil extends BaseBoxShapeUtil {
  static type = "folder";

  getDefaultProps() {
    return {
      w: 80,
      h: 80,
      title: "New Folder",
      isOpen: false,
      childrenIds: [],
    };
  }

  onDoubleClick = (shape) => {
    const isFolderOpen = !shape.props.isOpen;
    this.editor.updateShape({
      id: shape.id,
      type: "folder",
      props: {
        isOpen: isFolderOpen,
        w: isFolderOpen ? 200 : 80,
        h: isFolderOpen ? 180 : 80,
      },
    });
  };

  component(shape) {
    const { isOpen, title } = shape.props;

    return (
      // <HTMLContainer className="pointer-events-auto select-none">
      //   <div
      //     className={`flex flex-col h-full rounded-2xl border-2 transition-all duration-300 shadow-sm
      //                          ${isOpen ? "bg-white border-slate-300 scale-105" : "bg-slate-50 border-slate-200 hover:border-slate-300"}
      //                          `}
      //     style={{ width: shape.props.w, height: shape.props.h }}
      //   >
      //     <div className="p-3 flex items-center gap-2 border-b border-slate-200/50">
      //       <div className="w-3 h-3 rounded-full bg-slate-300" />
      //       <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
      //         {title}
      //       </span>
      //     </div>

      //     <div className="flex-1 flex items-center justify-center p-4">
      //       {!isOpen && (
      //         <span className="text-[10px] text-slate-400 font-medium italic">
      //           {shape.props.childrenIds.length} Items
      //         </span>
      //       )}
      //     </div>
      //   </div>
      // </HTMLContainer>

      <HTMLContainer className="pointer-events-auto select-none flex items-center justify-center">
        {isOpen ? (
          <div className="flex flex-col w-full h-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden transition-all duration-500">
            <div className="p-4 flex items-center justify-between bg-white/30 border-b border-white/20">
              <span className="text-sm font-semibold text-slate-800">
                {title}
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
              </div>
            </div>
            <div className="flex-1 p-4 italic text-slate-400 text-xs">
              Drop items here to add to project...
            </div>
          </div>
        ) : (
          <div className="group relative flex flex-col items-center gap-2 animate-in zoom-in-90 duration-300">
            <svg
              width="200"
              height="180"
              viewBox="0 0 641 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M578.038 26.478H204.596L205.74 29.359L233.643 98.737L574.171 99.012C574.171 99.012 586.508 99.708 593.362 101.254L592.651 101V41.073C592.651 33.002 586.108 26.478 578.038 26.478Z"
                fill="#AAD4C8"
              />
              <path
                d="M574.171 99.012L233.643 98.737L205.74 29.359L193.941 0H30.953C13.844 0 0 13.85 0 30.96V454.232C0 471.32 13.844 485.188 30.953 485.188H609.327C626.434 485.188 640.299 471.32 640.299 454.232V162.994C640.299 133.59 620.378 108.849 593.362 101.254C586.508 99.708 574.171 99.012 574.171 99.012ZM633.426 416.031V439.132H6.92V416.031H633.426Z"
                fill="#616E7D"
              />
              <path
                d="M6.92004 416.031H633.426V439.132H6.92004V416.031Z"
                fill="#82BFAB"
              />
            </svg>
            <span className="text-[10px] font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">
              {title}
            </span>
          </div>
        )}
      </HTMLContainer>
    );
  }

  // indicator(shape) {
  //   return <rect width={shape.props.w} height={shape.props.h} rx={16} />;
  // }

  indicator(shape) {
    return (
      <rect
        width={shape.props.w}
        height={shape.props.h}
        rx={shape.props.isOpen ? 24 : 12}
      />
    );
  }
}
