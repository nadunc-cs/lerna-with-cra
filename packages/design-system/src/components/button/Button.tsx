type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {

  
  return <button onClick={onClick} style={{padding: "0.5rem 1rem", backgroundColor:"beige"}}>{label}</button>;
}
