export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-2 font-bold">{children}</h2>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden mb-10 text-black m-auto rounded-lg p-6 pb-1">
      {children}
    </div>
  );
}
