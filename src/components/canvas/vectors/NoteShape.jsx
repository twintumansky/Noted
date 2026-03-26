export const NoteShape = ({ isOpen, title }) => {
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
                Add to the note...
            </div>
        </div>
    ) : (
        <div className="group relative flex flex-col items-center gap-1 animate-in zoom-in-90 duration-300">
            <svg
                width="119"
                height="160"
                viewBox="0 0 119 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#a)">
                    <path
                        d="M108.362 1.001h.126c4.318 0 7.862 3.754 7.88 8.352v.125c.107 27.163.398 110.87-.034 121.599-.517 12.832-17.018 25.071-27.018 25.071H9.883c-4.332 0-7.883-3.779-7.883-8.391V9.122C2 4.615 5.396 1 9.629 1h.382z"
                        fill="#e5e5e5"
                    />
                    <path
                        d="M116.421 127.335a169 169 0 0 1-.087 3.742c-.476 11.81-14.492 23.117-24.518 24.843v-20.575a8.01 8.01 0 0 1 8.01-8.01z"
                        fill="#dcdcdc"
                    />
                </g>
                <defs>
                    <filter
                        id="a"
                        x="0"
                        y="0"
                        width="118.563"
                        height="159.148"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.663462 0 0 0 0 0.65772 0 0 0 0 0.65772 0 0 0 0.25 0" />
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_36_2"
                        />
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_36_2"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>

            <span className="text-6 font-bold text-slate-600">{title}</span>
        </div>
    );
};
