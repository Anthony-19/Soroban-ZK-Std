'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { getFlatNavItems } from '@/lib/navigation';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const modalRef = useFocusTrap(isOpen);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = getFlatNavItems().filter((item) => {
    const haystack = `${item.title} ${item.href}`.toLowerCase();
    return query.trim() ? haystack.includes(query.trim().toLowerCase()) : true;
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Slight delay to ensure modal is rendered before focusing
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef as React.RefObject<HTMLDivElement>}
        className="relative w-full max-w-xl transform overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all m-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center">
          <svg className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none text-lg"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search input"
            id="search-modal-title"
          />
          <button
            onClick={onClose}
            className="ml-3 px-2 py-1 text-xs font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded transition-colors"
            aria-label="Close search modal"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3" role="listbox" aria-label="Search results">
          {results.length > 0 ? (
            <ul className="space-y-1">
              {results.map((result) => (
                <li key={result.href}>
                  <Link
                    href={result.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                  >
                    <span className="block font-medium">{result.title}</span>
                    <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      {result.href}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-sm text-neutral-500 dark:text-neutral-400 py-8 text-center" role="status">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
