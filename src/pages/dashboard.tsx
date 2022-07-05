import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import DefaultLayout from "containers/layout/layout";
import { AuthGuard } from "containers/auth/auth-guard";

const DashboardPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <AuthGuard>
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    </AuthGuard>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default DashboardPage;
