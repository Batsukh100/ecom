import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
const Cards = (props) => {
  const product = props.product;
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          <img src={product.images[0]} className="w-full h-full" />
        </CardDescription>
        <CardTitle className="text-xl">{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.category}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>${product.price} </p>
        <CardAction>
          <Button>View Details</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
export default Cards;
