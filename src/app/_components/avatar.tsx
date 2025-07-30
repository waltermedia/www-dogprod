import { Avatar as ShadcnAvatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex items-center">
      <ShadcnAvatar className="w-12 h-12 mr-4">
        <AvatarImage src={picture} alt={name} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </ShadcnAvatar>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
