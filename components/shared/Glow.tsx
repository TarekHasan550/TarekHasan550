interface GlowProps {
  size?: number;
  width?: number;
  color?: 'primary' | 'secondary';
  top?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
}

export default function Glow({
  size = 12,
  width = size,
  color = 'primary',
  top = 5,
  bottom = 0,
  left = -7,
  opacity = 50
}: GlowProps) {
  return (
    <div
      className="fixed z-10"
      style={{
        top: `${top}vw`,
        bottom: `${bottom}vw`,
        left: `${left}vw`,
      }}
    >
      <div
        style={{
          width: `${width}vw`,
          height: `${size}vw`,
          opacity: opacity/100,
        }}
        className={`rounded-full bg-${color} blur-3xl`}
      />
    </div>
  );
}
