import { twMerge } from "tailwind-merge";

export default function ContainerGrid({ children, className }) {
    const defaultClass = 'w-full max-w-grid mx-auto p-3';
    const combinedClass = twMerge(defaultClass, className)
    return (
        <div className={combinedClass}>
            {children}
        </div>
    );
}