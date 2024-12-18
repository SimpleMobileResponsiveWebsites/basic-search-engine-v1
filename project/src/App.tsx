import React, { useState, useCallback } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { SearchResult } from './types';
import { mockResults } from './data/mockResults';
import { Globe2 } from 'lucide-react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults);
    setHasSearched(true);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Globe2 className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Search Engine</h1>
            <p className="text-gray-600">Find what you're looking for</p>
          </div>

          {/* Search Bar */}
          <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
          />

          {/* Search Results */}
          {hasSearched && <SearchResults results={results} />}
        </div>
      </div>
    </div>
  );
}

export default App;