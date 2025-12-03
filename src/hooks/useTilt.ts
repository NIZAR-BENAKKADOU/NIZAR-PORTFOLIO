import { useState, useCallback, MouseEvent } from 'react';

interface TiltValues {
  rotateX: number;
  rotateY: number;
  transform: string;
}

interface UseTiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const useTilt = ({ maxTilt = 15, perspective = 1000, scale = 1.05 }: UseTiltOptions = {}) => {
  const [values, setValues] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
  });

  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setValues({
      rotateX,
      rotateY,
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    });
  }, [maxTilt, perspective, scale]);

  const onMouseLeave = useCallback(() => {
    setValues({
      rotateX: 0,
      rotateY: 0,
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    });
  }, [perspective]);

  return { values, onMouseMove, onMouseLeave };
};
