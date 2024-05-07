// import CardList from "./CardList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostList from "./PostList";
import "./App.css";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="mt-3 ml-6">
          <h1 className="text-3xl font-bold underline">Job Board</h1>
        </div>
        <PostList />
      </QueryClientProvider>
      {/* <CardList/> */}
    </>
  );
}
