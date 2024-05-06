// import CardList from "./CardList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostList from "./PostList";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PostList />
      </QueryClientProvider>
      {/* <CardList/> */}
    </>
  );
}
