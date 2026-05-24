'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn btn-ghost btn-sm"
      style={{ marginTop: '0.5rem' }}
    >
      🖨️ Print Schedule
    </button>
  );
}
