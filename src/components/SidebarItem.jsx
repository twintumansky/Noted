import { useState } from "react";

export default function SidebarItem({ item, depth = 0 }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="select-none">
            <div
                style={{ paddingLeft: `${depth * 12 + 12}px` }}
                className="flex items-center py-2 px-3 hover:bg-slate-100 cursor-pointer group transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`mr-2 transition-transform ${isOpen ? 'rotate-90' : ''}`}>
                    {item.children?.length > 0 ? '▶' : '•'}
                </span>
                <span className="text-sm font-medium">{item.title}</span>
            </div>
            {isOpen && item.children?.map(child => (
                <SidebarItem key={child.id} item={child} depth={depth + 1} />
            ))}
        </div>
    );
};