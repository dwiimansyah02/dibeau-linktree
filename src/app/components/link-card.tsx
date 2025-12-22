import { MessageCircle } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
}

export function LinkCard({ title, description, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-pink-200 hover:-translate-y-1 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="mb-1 group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
        <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors ml-4 shrink-0" />
      </div>
    </a>
  );
}