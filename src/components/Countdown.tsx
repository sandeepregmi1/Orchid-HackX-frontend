import { useEffect, useState } from 'react';

interface TimeUnit {
  label: string;
  value: number;
}

export default function Countdown() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 },
  ]);

  useEffect(() => {
    const updateCountdown = () => {
      // Event date: June 19, 2026
      const eventDate = new Date('2026-06-19T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeUnits([
          { label: 'Days', value: days },
          { label: 'Hours', value: hours },
          { label: 'Minutes', value: minutes },
          { label: 'Seconds', value: seconds },
        ]);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-6">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div
            className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-surface-container border border-outline-variant/30 flex items-center justify-center text-2xl md:text-4xl font-bold text-on-surface"
            style={{
              animation: 'pulse-glow 3s infinite',
              boxShadow: '0 0 20px rgba(210, 148, 255, 0.3)',
            }}
          >
            {String(unit.value).padStart(2, '0')}
          </div>
          <span className="text-xs md:text-sm text-on-surface-variant mt-2 uppercase tracking-widest">
            {unit.label}
          </span>
        </div>
      ))}

    </div>
  );
}
