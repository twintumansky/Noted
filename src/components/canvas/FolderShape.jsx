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
          <div className="group relative flex flex-col items-center gap-1 animate-in zoom-in-90 duration-300">
            <svg
              width="109"
              height="156"
              viewBox="0 0 109 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#b2ccc4" d="M96.579 36.668h6.011v83.555h-6.011z" />
              <path
                d="M108.05 8.015A8.015 8.015 0 0 0 100.035 0h-11.02A8.015 8.015 0 0 0 81 8.015v32.964c0 6.712 7.757 10.451 13.007 6.27l11.021-8.776a8.01 8.01 0 0 0 3.022-6.27z"
                fill="#82afae"
              />
              <rect width="98.783" height="155.087" rx="8.015" fill="#82afae" />
              <path
                d="M108 146.985A8.014 8.014 0 0 1 99.985 155h-18.97A8.015 8.015 0 0 1 73 146.985v-35.59c0-6.281 6.897-10.121 12.236-6.813l18.971 11.755a8.01 8.01 0 0 1 3.793 6.812z"
                fill="#82afae"
              />
              <path d="M4.54 8.015v139.057H2.282V8.015z" fill="#c3cbd4" />
            </svg>
            <span className="text-4 font-bold text-slate-600">
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
