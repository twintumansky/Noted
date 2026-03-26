export const FolderShape = ({ isOpen, title }) => {
    return isOpen ? (
        <div className="flex flex-col w-full h-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden transition-all duration-500">
            <div className="p-4 flex items-center justify-between bg-white/30 border-b border-white/20">
                <span className="text-sm font-semibold text-slate-800">{title}</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                </div>
            </div>
            <div className="flex-1 p-4 italic text-slate-400 text-xs">
                Add to the folder...
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
                <rect
                    x="96.5789"
                    y="36.6679"
                    width="6.01113"
                    height="83.5547"
                    fill="#93ADA5"
                />
                <path
                    d="M108.05 8.01485C108.05 3.58837 104.462 0 100.035 0H89.0148C84.5884 0 81 3.58837 81 8.01484V36.0668V40.979C81 47.6911 88.7568 51.43 94.0075 47.2488L105.028 38.4733C106.938 36.9527 108.05 34.6446 108.05 32.2035V8.01485Z"
                    fill="#616E7D"
                />
                <rect width="98.7829" height="155.087" rx="8.01484" fill="#616E7D" />
                <path
                    d="M108 146.985C108 151.412 104.412 155 99.9852 155H81.0148C76.5884 155 73 151.412 73 146.985V118.687V111.395C73 105.114 79.897 101.274 85.2363 104.582L104.207 116.336C106.565 117.798 108 120.375 108 123.149V146.985Z"
                    fill="#616E7D"
                />
                <path
                    d="M4.54053 8.01483L4.54052 147.072L2.28111 147.072L2.28112 8.01483L4.54053 8.01483Z"
                    fill="#56616E"
                />
            </svg>

            <span className="text-6 font-bold text-slate-600">{title}</span>
        </div>
    );
};
