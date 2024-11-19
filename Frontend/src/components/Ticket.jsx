import React from "react";

export default function Ticket() {
  return (
    <div className="relative w-30 rounded-xl border-2 border-dashed border-[#4f595a] bg-[#323738] p-4 shadow-lg cursor-pointer">
      {/* Wallet Address */}
      <div className="border-none absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full border bg-[#232626] px-3 py-1 text-xs font-semibold shadow-md">
        {"0x23..we2A"}
      </div>

      <div className="flex h-2 flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-bold tracking-wide"></p>
          <div className="bg-red-500 my-2 h-1 w-32"></div>
        </div>
      </div>

      {/* Ticket Number */}
      <div className="border-none absolute -bottom-3 left-1/2 -translate-x-1/2 transform rounded-full border bg-[#232626] px-3 py-1 text-center text-xs font-semibold shadow-md">
        <span className="text-[1.1rem] font-[800]">33333</span>
      </div>
    </div>
  );
}
