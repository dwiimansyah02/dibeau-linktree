import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  disabled?: boolean;
}

export function LinkCard({ title, description, url, disabled }: LinkCardProps) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      onClick={(e) => disabled && e.preventDefault()}
      className={`
        block rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-pink-200 hover:-translate-y-1 group
        ${disabled
          ? "opacity-50 cursor-not-allowed bg-gray-100"
          : "hover:shadow-lg hover:-translate-y-0.5 bg-white"}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="mb-1 group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          {disabled === false ? (
            <p className="text-sm text-gray-500">{description}</p>
          ):(
           <p className="mt-2 text-xs text-red-500">Sementara tidak tersedia</p>
          )}
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors ml-4 shrink-0" />
      </div>
    </a>
  );
}