import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface props {
  children: string;
}

const ExpandableText = ({ children }: props) => {
  const [flag, setFlag] = useState<Boolean>(false);
  const limit = 300;

	if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = !flag ? children?.slice(0, limit) : children;

  return (
    <Text>
      {summary}
      <Button
        size="xs"
				marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setFlag(!flag)}
      >
        {!flag ? "Show More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
