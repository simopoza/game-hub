import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isErrorRoute = isRouteErrorResponse(error);

  return (
    <>
			<NavBar/>
			<Box padding={5}>
      	<Heading>Oops....</Heading>
				<Text>
					{isErrorRoute ? "This Page does not exist" : "Error In The App"}
				</Text>
			</Box>
    </>
  );
};

export default ErrorPage;
