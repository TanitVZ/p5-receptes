import React from 'react';

export default function Loading() {
  return (
    <main>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-700">
          Loading
          <span className="animate-bounce inline-block mx-1" >.</span>
          <span className="animate-bounce inline-block mx-1"  style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-bounce inline-block mx-1"  style={{ animationDelay: '0.2s' }}>.</span>
        </p>
      </div>
    </div>
    </main>
  );
}
