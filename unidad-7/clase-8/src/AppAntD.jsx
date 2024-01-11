import { Typography } from "antd";
import ExampleCard from "./components/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const AppAntD = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
      <button onClick={() => setShowMore(true)}> más</button>
      {showMore && <Products />}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default AppAntD;
