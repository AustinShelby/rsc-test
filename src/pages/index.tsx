import { getData } from "@/getData";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <pre>
        <code>{data}</code>
      </pre>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ data: string }> = async () => {
  const data = await getData();
  return { props: { data: data } };
};

export default HomePage;
