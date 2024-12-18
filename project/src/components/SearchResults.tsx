import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl space-y-6 mt-8">
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
              {result.title}
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h2>
            <p className="text-green-600 text-sm mt-1">{result.url}</p>
            <p className="text-gray-600 mt-2">{result.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}