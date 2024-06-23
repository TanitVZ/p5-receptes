"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="p-4 bg-red-500 text-white">Error: {error.message}</div>
  );
}
