import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  disabled?: boolean;
}

export function LinkCard({
  title,
  description,
  url,
  disabled = false,
}: LinkCardProps) {
  return (
    <a
      href={disabled ? undefined : url}
      rel="noopener noreferrer"
      onClick={(e) => disabled && e.preventDefault()}
      className={`
        block rounded-2xl p-6 border transition-all duration-200
        ${disabled
          ? "cursor-not-allowed opacity-60 bg-gray-100 border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
          : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-pink-200 dark:bg-neutral-900 dark:border-neutral-800 group"}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3
            className={`
              mb-1 transition-colors
              ${disabled
                ? "text-gray-400 dark:text-gray-500"
                : "text-gray-900 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400"}
            `}
          >
            {title}
          </h3>

          {!disabled && description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}

          {disabled && (
            <p className="mt-2 text-xs text-red-500 dark:text-red-400">
              Sementara tidak tersedia
            </p>
          )}
        </div>

        <ExternalLink
          className={`
            w-5 h-5 ml-4 shrink-0 transition-colors
            ${disabled
              ? "text-gray-300 dark:text-gray-600"
              : "text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400"}
          `}
        />
      </div>
    </a>
  );
}
