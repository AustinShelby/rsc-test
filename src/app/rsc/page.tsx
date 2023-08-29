import { getData } from "@/getData";

const RscPage = async () => {
  const data = await getData();

  return (
    <div>
      <pre>
        <code>{data}</code>
      </pre>
    </div>
  );
};

export default RscPage;
