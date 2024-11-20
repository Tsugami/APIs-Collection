import { Layout } from "../components/Layout";
import { PostList } from "../components/PostList";
import { Whoami } from "../components/Whoami";

export const HomePage = () => {
  return (
    <Layout>
      <Whoami />
      <PostList/>
    </Layout>
  );
};
