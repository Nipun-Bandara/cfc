"use client";

const Preloader = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center gap-1 py-40"
    >
      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="h-6 w-1 bg-green-500"></div>
        <div className="h-12 w-3 rounded-sm bg-green-500"></div>
        <div className="h-6 w-1 bg-green-500"></div>
      </div>

      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]">
        <div className="h-6 w-1 bg-red-500"></div>
        <div className="h-12 w-3 rounded-sm bg-red-500"></div>
        <div className="h-6 w-1 bg-red-500"></div>
      </div>

      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="h-6 w-1 bg-green-500"></div>
        <div className="h-12 w-3 rounded-sm bg-green-500"></div>
        <div className="h-6 w-1 bg-green-500"></div>
      </div>
    </div>

  );
};

export default Preloader;
