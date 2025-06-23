// components/CustomCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CustomCardProps = {
  title: string;
  description: string;
  icon?: string;
};

const CustomCard = ({ title, description, icon }: CustomCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {icon && `${icon} `}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
