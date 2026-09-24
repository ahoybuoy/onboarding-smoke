export function ProbeButton({ label }: { label: string }) {
  return (
    <button
      style={{ color: '#2563eb', padding: '8px', width: '340px' }}
      className="bg-[#2563eb] p-[7px] min-h-[100dvh] rounded-[inherit] transition-[transform,opacity]"
    >
      {label}
    </button>
  );
}
