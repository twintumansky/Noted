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
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-md transition-transform group-hover:scale-110"
            >
              <path
                d="M2 7C2 5.89543 2.89543 5 4 5H9L11 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="1.5"
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
    return <rect width={shape.props.w} height={shape.props.h} rx={shape.props.isOpen ? 24 : 12} />;
  }
}
